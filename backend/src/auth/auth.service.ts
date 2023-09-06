import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  //로그인
  async signIn(userID: string, password: string): Promise<any> {
    const user = await this.userService.findOne(userID);
    if (user && user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userID, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  //회원가입
  async signUp(
    userID: string,
    password: string,
    username: string,
  ): Promise<any> {
    const user = await this.userService.findOne(userID);
    if (!userID || !password || !username) {
      throw new BadRequestException('모든 항목을 입력해주세요.');
    }

    if (user) {
      throw new BadRequestException('이미 존재하는 아이디입니다.');
    }

    return this.userService.create(userID, password, username);
  }
}
