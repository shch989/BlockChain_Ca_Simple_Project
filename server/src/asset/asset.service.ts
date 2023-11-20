import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Gateway, Wallet } from 'fabric-network';
// Lib Modules
import { AppUtilsService } from 'src/lib/apputil.service';
import { CAUtilsService } from 'src/lib/cautil.service';
// dto
import { CreateAssetRequestDto } from './dtos/CreateAssetRequest.dto';
import { GetAssetRequestDto } from './dtos/GetAssetRequest.dto';
import { SendAssetRequestDto } from './dtos/SendAssetRequest.dto';

@Injectable()
export class AssetService {
  constructor(private readonly appUtilsService: AppUtilsService, private readonly cautilsService: CAUtilsService) { }

  private readonly channelName = "mychannel";
  private readonly chaincodeName = "basic";

  async createAsset(assetData: CreateAssetRequestDto) {
    console.log(assetData)

    const wallet: Wallet = await this.appUtilsService.buildWallet()
    const gateway = new Gateway()
    const ccp = this.appUtilsService.buildCCPOrg1()
    try {
      await gateway.connect(ccp, {
        wallet,
        identity: assetData.c_cert,
        discovery: {
          enabled: true,
          asLocalhost: true
        }
      })
      const network = await gateway.getNetwork(this.channelName)
      const contract = network.getContract(this.chaincodeName)

      await contract.submitTransaction('CreateAsset', assetData.id, assetData.c_color, assetData.c_size, assetData.c_owner, assetData.c_value)
      const rObj = { message: `tx has been submitted` };
      return rObj;

    } catch (error) {
      console.error(error);
      throw new HttpException({
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      gateway.disconnect()
    }
  }
  
  async getAllAsset(assetData: GetAssetRequestDto) {
    console.log(assetData)

    const wallet: Wallet = await this.appUtilsService.buildWallet()
    const gateway = new Gateway()
    const ccp = this.appUtilsService.buildCCPOrg1()
    try {
      await gateway.connect(ccp, {
        wallet,
        identity: assetData.c_cert,
        discovery: {
          enabled: true,
          asLocalhost: true
        }
      })
      const network = await gateway.getNetwork(this.channelName)
      const contract = network.getContract(this.chaincodeName)

      const result = await contract.evaluateTransaction('ReadAsset', assetData.id)
      const resultString = result.toString('utf-8');
      const parsed_data = JSON.parse(resultString)
      const rObj = { message: parsed_data };
      return rObj;

    } catch (error) {
      console.error(error);
      throw new HttpException({
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      gateway.disconnect()
    }
  }

  async sendAssetData(assetData: SendAssetRequestDto) {
    console.log(assetData)

    const wallet: Wallet = await this.appUtilsService.buildWallet()
    const gateway = new Gateway()
    const ccp = this.appUtilsService.buildCCPOrg1()
    try {
      await gateway.connect(ccp, {
        wallet,
        identity: assetData.c_cert,
        discovery: {
          enabled: true,
          asLocalhost: true
        }
      })
      const network = await gateway.getNetwork(this.channelName)
      const contract = network.getContract(this.chaincodeName)

      await contract.submitTransaction('TransferAsset', assetData.id, assetData.c_owner)
      const rObj = { message: `tx has been submitted` };
      return rObj;

    } catch (error) {
      console.error(error);
      throw new HttpException({
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      gateway.disconnect()
    }
  }

  async getAssetHistory(assetData: GetAssetRequestDto) {
    console.log(assetData)

    const wallet: Wallet = await this.appUtilsService.buildWallet()
    const gateway = new Gateway()
    const ccp = this.appUtilsService.buildCCPOrg1()
    try {
      await gateway.connect(ccp, {
        wallet,
        identity: assetData.c_cert,
        discovery: {
          enabled: true,
          asLocalhost: true
        }
      })
      const network = await gateway.getNetwork(this.channelName)
      const contract = network.getContract(this.chaincodeName)

      const result = await contract.evaluateTransaction('GetAssetHistory', assetData.id)
      const resultString = result.toString('utf-8');
      const parsed_data = JSON.parse(resultString)
      const rObj = { message: parsed_data };
      return rObj;

    } catch (error) {
      console.error(error);
      throw new HttpException({
        error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    } finally {
      gateway.disconnect()
    }
  }
}
