import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
// @UseInterceptors(new SuccessInterceptor())
export class UserController {
  constructor(private readonly userService: UserService) { }

}
