import { Injectable } from '@nestjs/common';

@Injectable()
export class CattleService {
  constructor() { }

  // 모든 가축 정보 조회 Service
  getAllCattles(): string {
    return "get all cattles data"
  }

  // 가축 정보 조회 Service
  getCattle(cattleId: number): string {
    return `get ${cattleId} cattle data`
  }

  // 가축 등록 Service
  addCattle(): string {
    return "add cattle data"
  }

  // 가축 정보 수정 Service
  updateCattle(cattleId: number): string {
    return `update ${cattleId} cattle data`
  }

  // 가축 이력 조회 Service
  getCattleHistory(cattleId: number): string {
    return `get ${cattleId} cattle's history data`
  }

  // 가축 소유주 변경 Service
  updateCattleOwnership(cattleId: number): string {
    return `update ${cattleId} cattle transfer-ownership`
  }

  // 가축 삭제 Service
  deleteCattle(cattleId: number): string {
    return `delete ${cattleId} cattle`
  }
}
