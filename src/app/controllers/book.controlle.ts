import { type Request, type Response, type NextFunction } from 'express';
import bookService from '../service/book.service';
import BookModel from '../models/book.model';
import { Get, Route, Controller } from 'tsoa';
import tokenService from '../service/token.service';
import ApiError from '../globals/api-error';
import UserModel from '../models/user.model';
import UserDto from '../dtos/user.dto';
import BookDto from '../dtos/book.dto';
import userService from '../service/user.service';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

@Route('book')
class BookController extends Controller {
  @Get('/')
  async all(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { refreshToken } = req.cookies;
      const userData: any = tokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }
      const books = await bookService.getAllBooksByUserId(userData.id);
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
        fileName = uuidv4() + '.jpg';
        image.mv(path.resolve(__dirname, '..', '..', '..', 'upload', fileName));
      }

      const { refreshToken } = req.cookies;
      const userData: any = tokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }

      const books = await BookModel.create({
        title,
        description,
        genre,
        fullName,
        image: fileName,
        year,
        numberPages,
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
      const book = await bookService.one(fromId);
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

      await book?.update({
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
      });

      res.end(JSON.stringify(book));
    } catch (e) {
      next(e);
    }
  }
}

export default new BookController();
