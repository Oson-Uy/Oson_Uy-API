import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(createLeadDto: CreateLeadDto) {
    return this.prisma.lead.create({
      data: createLeadDto,
      include: {
        apartment: {
          include: {
            project: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.lead.findMany({
      include: {
        apartment: {
          include: {
            project: true,
          },
        },
      },
    });
  }
}
