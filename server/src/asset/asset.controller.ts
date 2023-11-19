import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { AssetService } from './asset.service';
import { CreateAssetRequestDto } from './dtos/CreateAssetRequest.dto';
import { GetAssetRequestDto } from './dtos/GetAssetRequest.dto';

@Controller('asset')
@UseInterceptors(new SuccessInterceptor())
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  async getAllAsset(@Query() assetData: GetAssetRequestDto) {
    const assetResult = await this.assetService.getAllAsset(assetData)
    return assetResult
  }

  @Post()
  async createAsset(@Body() assetData: CreateAssetRequestDto) {
    const assetResult = await this.assetService.createAsset(assetData)
    return assetResult
  }
}
