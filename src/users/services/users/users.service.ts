import { Injectable } from '@nestjs/common';

// type
import { RegisterType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [{ userName: 'manazir', email: 'manazir@gmail.com' }];

  fetchUsers() {
    return this.fakeUsers;
  }

  registerUser(userinfo:RegisterType) {
    return this.fakeUsers.push(userinfo);
  }

  fetchUserById(id: number) {
    return { id };
  }
}
