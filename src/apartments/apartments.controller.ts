import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new apartment' })
  @ApiResponse({ status: 201, description: 'Apartment created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request - validation error' })
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentsService.create(createApartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all apartments' })
  @ApiQuery({
    name: 'projectId',
    required: false,
    description: 'Filter by project ID',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all apartments with project and leads',
  })
  findAll(
    @Query('projectId', new ParseIntPipe({ optional: true }))
    projectId?: number,
  ) {
    return this.apartmentsService.findAll(projectId);
  }
}
