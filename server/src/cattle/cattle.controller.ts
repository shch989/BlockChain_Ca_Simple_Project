import { Controller, Get, Post, Put, Delete, Param, UseInterceptors, ParseIntPipe } from '@nestjs/common';
import { CattleService } from './cattle.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cattle')
@UseInterceptors(new SuccessInterceptor())
export class CattleController {
  constructor(private readonly cattleService: CattleService) { }

  // 모든 가축 정보 조회 Controller
  @Get()
  getAllCattles(): string {
    return this.cattleService.getAllCattles()
  }

  // 가축 정보 조회 Controller
  @Get("/:cattleId")
  getCattle(@Param('cattleId', ParseIntPipe) cattleId: number): string {
    return this.cattleService.getCattle(cattleId)
  }

  // 가축 등록 Controller
  @Post()
  addCattle(): string {
    return this.cattleService.addCattle()
  }

  // 가축 정보 수정 Controller
  @Put("/:cattleId")
  updateCattle(@Param('cattleId', ParseIntPipe) cattleId: number): string {
    return this.cattleService.updateCattle(cattleId)
  }

  // 가축 이력 조회 Controller
  @Get("/:cattleId/history")
  getCattleHistory(@Param('cattleId', ParseIntPipe) cattleId: number): string {
    return this.cattleService.getCattleHistory(cattleId)
  }

  // 가축 소유주 변경 Controller
  @Put("/:cattleId/transfer-ownership")
  updateCattleOwnership(@Param('cattleId', ParseIntPipe) cattleId: number): string {
    return this.cattleService.updateCattleOwnership(cattleId)
  }

  // 가축 삭제 Controller
  @Delete("/:cattleId")
  deleteCattle(@Param('cattleId', ParseIntPipe) cattleId: number): string {
    return this.cattleService.deleteCattle(cattleId)
  }
}
