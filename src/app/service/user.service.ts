import User from '../models/user.model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail.service';
import tokenService from './token.service';
import UserDto from '../dtos/user.dto';
import process from 'process';
import userModel from '../models/user.model';

class UserService {
  async registration(email: string, password: string) {
    const candidate: User[] = await User.findAll({ where: { email } });

    if (candidate.length > 0) {
      throw new Error(`Пользователь с почтовым адремос ${email} уже существует!`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink: string = uuidv4();

    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`,
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateТokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activete(activationLink: string) {
    const user = await userModel.findOne({ where: { activationLink } });
    if (!user) {
      throw new Error('Неккоректная ссылка активации');
    }
    user.isActivated = true;
    await user.save();
  }
}

export default new UserService();