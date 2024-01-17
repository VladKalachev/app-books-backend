import { type Request, type Response, type NextFunction } from 'express';
import BookService from '../service/book.service';
import BookModel from '../models/book.model';

import TokenService from '../service/token.service';
import FileService from '../service/file.service';
import ApiError from '../globals/api-error';
import BookDto from '../dtos/book.dto';

import { Get, Route, Controller } from 'tsoa';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';

@Route('book')
class BookController extends Controller {
  @Get('/')
  async all(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { refreshToken } = req.cookies;
      const userData: any = TokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }
      const books = await BookService.getAllBooksByUserId(userData.id);
      const booksData = books.map((book) => new BookDto(book));
      res.json(booksData);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        title,
        description,
        genre,
        fullName,
        year,
        numberPages,
        publishing,
        notes,
        read,
        buy,
      } = req.body;

      let fileName = '';

      if (req.files) {
        // @ts-expect-error
        const { image } = req.files;
        fileName = await FileService.create(image);
      }

      const { refreshToken } = req.cookies;
      const userData: any = TokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }

      const books = await BookModel.create({
        title,
        description,
        genre,
        fullName,
        image: fileName,
        year: year.split('"').length > 1 ? Number(year.split('"')[1]) : year,
        numberPages:
          numberPages.split('"').length > 1 ? Number(numberPages.split('"')[1]) : numberPages,
        publishing,
        notes,
        read,
        buy,
        UserId: userData.id,
      });
      res.end(JSON.stringify(books));
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async one(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const book = await BookService.one(fromId);
      res.json(book);
    } catch (e) {
      next(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const book = await BookModel.findOne({
        where: {
          id: fromId,
        },
      });

      if (book) {
        // @ts-expect-error
        const fileName = book.image;
        if (fs.existsSync(path.join(__dirname, '..', '..', '..', 'upload', fileName))) {
          fs.unlink(path.join(__dirname, '..', '..', '..', 'upload', fileName), (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      }

      await book?.destroy();
      res.end(JSON.stringify(true));
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const book = await BookModel.findOne({
        where: {
          id: fromId,
        },
      });

      const {
        title,
        description,
        genre,
        fullName,
        image,
        year,
        numberPages,
        publishing,
        notes,
        read,
        buy,
      } = req.body;

      let fileName = image;

      if (req.files) {
        // @ts-expect-error
        const { image } = req.files;
        if (typeof image !== 'string') {
          fileName = uuidv4() + '.jpg';
          image.mv(path.resolve(__dirname, '..', '..', '..', 'upload', fileName));
        }
      }

      await book?.update({
        title,
        description,
        genre,
        fullName,
        image: fileName,
        year: year.split('"').length > 1 ? Number(year.split('"')[1]) : year,
        numberPages:
          numberPages.split('"').length > 1 ? Number(numberPages.split('"')[1]) : numberPages,
        publishing,
        notes,
        read,
        buy,
      });

      res.end(JSON.stringify(book));
    } catch (e) {
      next(e);
    }
  }
}

export default new BookController();
