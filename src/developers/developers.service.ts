import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    return this.prisma.developer.create({
      data: createDeveloperDto,
    });
  }

  async findAll() {
    return this.prisma.developer.findMany({
      include: {
        projects: true,
      },
    });
  }
}
