import { Body, Controller, Post } from '@nestjs/common';
// import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { AdminService } from './admin.service';
import { AdminRequest } from './dtos/AdminResponse.dto';

@Controller('admin')
// @UseInterceptors(new SuccessInterceptor())
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post()
  createAdmin(@Body() body: AdminRequest) {
    const admin = this.adminService.createAdmin(body)
    return admin
  }
}
