import jwt from 'jsonwebtoken';
import tokenModel from '../models/token.model';
import type UserModel from '../models/user.model';
import type UserDto from '../dtos/user.dto';

class TokenService {
  generateТokens(payload: UserDto) {
    const accessToken = jwt.sign(payload, process?.env?.JWT_ACCESS_SECRET || '', {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process?.env?.JWT_REFRESH_SECRET || '', {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await tokenModel.findOne({ where: { userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData?.save();
    }
    const token = await tokenModel.create({ userId, refreshToken });
    return token;
  }
}

export default new TokenService();
