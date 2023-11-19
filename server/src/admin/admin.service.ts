import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// 외부 서비스
import { AppUtilsService } from 'src/lib/apputil.service';
import { CAUtilsService } from 'src/lib/cautil.service';
import * as path from 'path';
// DTO
import { AdminRequest } from './dtos/AdminResponse.dto';

@Injectable()
export class AdminService {
  constructor(private readonly appUtilsService: AppUtilsService, private readonly caUtilsService: CAUtilsService) { }

  private readonly ccp = this.appUtilsService.buildCCPOrg1()
  private readonly mspOrg1 = 'Org1MSP'

  async createAdmin(adminData: AdminRequest): Promise<any> {
    const aid = adminData.adminid 
    const apw = adminData.adminpw
    try {
      const caClient = this.caUtilsService.buildCAClient(this.ccp, 'ca.org1.example.com');
      const wallet = await this.appUtilsService.buildWallet();
      await this.caUtilsService.enrollAdmin(caClient, wallet, this.mspOrg1, aid, apw);

      const rObj = { result: "success", message: "An admin id is created" }
      return rObj

    } catch (error) {
      console.log(error);
      throw new HttpException({
        result: 'fail',
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

