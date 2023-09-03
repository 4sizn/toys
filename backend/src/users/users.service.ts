import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userID: 'admin',
      password: 'admin',
      username: 'admin',
    },
  ];

  async findOne(userID: string): Promise<any | undefined> {
    return this.users.find((user) => user.userID === userID);
  }
}
