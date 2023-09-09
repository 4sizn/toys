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
    const user = await this.userService.user({ id: userID });

    //정보 없음
    if (!user) {
      throw new UnauthorizedException('아이디가 존재하지 않습니다.');
    }

    //비밀번호 오류
    if (user && user.password !== password) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    const payload = { sub: user.id, username: user.name };
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
    if (!userID || !password || !username) {
      throw new BadRequestException('모든 항목을 입력해주세요.');
    }

    const user = await this.userService.user({ id: userID });

    if (user) {
      throw new BadRequestException('이미 존재하는 아이디입니다.');
    }

    return this.userService.create({
      id: userID,
      password: password,
      name: username,
      email: userID,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
