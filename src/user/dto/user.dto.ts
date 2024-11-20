import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { Role } from '../user.entity';

export class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  username?: string;
  email?: string;

  @IsIn(Object.values(Role))
  role?: Role;
}
