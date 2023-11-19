import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// 외부 서비스
import { AppUtilsService } from 'src/lib/apputil.service';
import { CAUtilsService } from 'src/lib/cautil.service';

@Injectable()
export class UserService {
  constructor(private readonly appUtilsService: AppUtilsService, private readonly caUtilsService: CAUtilsService) { }

  private readonly ccp = this.appUtilsService.buildCCPOrg1()

  async createUser(uid: string, affilication: string): Promise<any> {
    try {
      const caClient = this.caUtilsService.buildCAClient(this.ccp, 'ca.org1.example.com');
      const wallet = await this.appUtilsService.buildWallet();
      await this.caUtilsService.registerAndEnrollUser(caClient, wallet, 'Org1MSP', uid, affilication);

      const rObj = {
        result: 'success',
        message: `An user id is created - ${uid}`,
      };

      return rObj;
    } catch (error) {
      console.error(error);
      throw new HttpException({
        result: 'fail',
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
