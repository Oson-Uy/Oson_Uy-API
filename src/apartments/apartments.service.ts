import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  async create(createApartmentDto: CreateApartmentDto) {
    return this.prisma.apartment.create({
      data: createApartmentDto,
      include: {
        project: true,
        leads: true,
      },
    });
  }

  async findAll(projectId?: number) {
    const where = projectId ? { projectId } : {};

    return this.prisma.apartment.findMany({
      where,
      include: {
        project: true,
        leads: true,
      },
    });
  }
}
