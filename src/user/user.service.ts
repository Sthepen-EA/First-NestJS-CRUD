import { Injectable } from '@nestjs/common';
import { Role, User } from './user.entity';
import { v4 } from 'uuid';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  userList: User[] = [
    {
      id: v4(),
      username: 'kammysliwiec',
      email: 'kammysliwiec@o2.pl',
      role: Role.USER,
    },
  ];

  getAllUsers() {
    return this.userList;
  }

  createUser(username: string, email: string) {
    const newUser = {
      id: v4(),
      username,
      email,
      role: Role.USER,
    };

    this.userList.push(newUser);

    return newUser;
  }

  deleteUser(id: string) {
    this.userList = this.userList.filter((user) => user.id !== id);
  }

  getUserById(id: string) {
    return this.userList.find((user) => user.id === id);
  }

  updateUser(id: string, updatedUser: UpdateUserDto): User {
    const user = this.getUserById(id);
    const userUpdated = Object.assign(user, updatedUser);

    this.userList = this.userList.map((user) =>
      user.id === id ? userUpdated : user,
    );

    return userUpdated;
  }
}
