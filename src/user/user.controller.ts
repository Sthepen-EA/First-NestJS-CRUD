import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  private userService: UserService = new UserService();

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() newUser: UserDto) {
    return this.userService.createUser(newUser.username, newUser.email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: UpdateUserDto) {
    return this.userService.updateUser(id, updatedUser);
  }
}
