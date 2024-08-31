import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  UseGuards,
} from '@nestjs/common';

// service
import { UsersService } from 'src/users/services/users/users.service';

// dto
import { Register } from 'src/users/dto/register.user.dto';

// pipe
import { CreateUserPipePipe } from 'src/users/pipe/create-user-pipe/create-user-pipe.pipe';

// Guard
import { AuthGuard } from 'src/users/guard/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  register(@Body(CreateUserPipePipe) register: Register) {
    return this.userService.registerUser(register);
  }

  @Get(':id')
  userById(@Param('id') id: number) {
    return this.userService.fetchUserById(id)
  }
}
