import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DevelopersController],
  providers: [DevelopersService, PrismaService],
})
export class DevelopersModule {}
