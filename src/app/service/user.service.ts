import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail.service';
import tokenService from './token.service';
import UserDto from '../dtos/user.dto';
import process from 'process';
import ApiError from '../globals/api-error';
import Books from '../models/book.model';

class UserService {
  async registration(email: string, password: string) {
    const candidate: UserModel[] = await UserModel.findAll({ where: { email } });

    if (candidate.length > 0) {
      throw ApiError.BadRequest(`Пользователь с почтовым адремос ${email} уже существует!`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink: string = uuidv4();

    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/activate/${activationLink}`,
    // );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateТokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activete(activationLink: string) {
    const user = await UserModel.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активации');
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateТokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizeError();
    }
    const userData: any = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizeError();
    }

    const user: any = await UserModel.findOne({ where: { id: userData?.id } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateТokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.findAll();
    return users;
  }

  async getAllUsersWithBooks() {
    const userWithBooks = await UserModel.findAll({
      include: [{ model: Books }],
    });
    return userWithBooks;
  }
}

export default new UserService();
