import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  //로그인
  async signIn(userID: string, password: string): Promise<any> {
    const user = await this.userService.findOne(userID);
    if (user && user.password !== password) {
      throw new UnauthorizedException();
    }

    const { password: _, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    return result;
  }
}
