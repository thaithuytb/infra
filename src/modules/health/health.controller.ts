import { Controller, Get } from '@nestjs/common'

@Controller('health-check')
export class HealthController {
  constructor() {}
  @Get()
  healthCheck(): object {
    return { success: true }
  }
}
