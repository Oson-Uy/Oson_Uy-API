import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnalyticsService, ProjectLeadAnalytics } from './analytics.service';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('projects')
  @ApiOperation({ summary: 'Get analytics for all projects' })
  @ApiResponse({
    status: 200,
    description: 'Lead count grouped by project',
    isArray: true,
  })
  async getProjectsAnalytics(): Promise<ProjectLeadAnalytics[]> {
    return this.analyticsService.getProjectsAnalytics();
  }
}
