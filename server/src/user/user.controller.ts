import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { userRequestDto } from './dtos/UserRequest.dto';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('user')
@UseInterceptors(new SuccessInterceptor())
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createAdmin(@Body() userData: userRequestDto) {
    const adminResult = await this.userService.createUser(userData)
    return adminResult
  }
}
