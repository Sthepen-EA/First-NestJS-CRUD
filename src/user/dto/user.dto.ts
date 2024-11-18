import { Role } from '../user.entity';

export class UserDto {
  username: string;
  email: string;
}

export class UpdateUserDto {
  username?: string;
  email?: string;
  role?: Role;
}
