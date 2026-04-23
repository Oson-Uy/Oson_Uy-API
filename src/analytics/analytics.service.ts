import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

export interface ProjectLeadAnalytics {
  projectId: number;
  leadsCount: number;
}

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getProjectsAnalytics(): Promise<ProjectLeadAnalytics[]> {
    const groupedLeads = await this.prisma.lead.groupBy({
      by: ['projectId'],
      _count: {
        id: true,
      },
    });

    return groupedLeads.map((item) => ({
      projectId: item.projectId,
      leadsCount: item._count.id,
    }));
  }
}
