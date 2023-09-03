import { Injectable, UnauthorizedException } from '@nestjs/common';
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
}
