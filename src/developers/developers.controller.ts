import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@ApiTags('developers')
@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new developer' })
  @ApiResponse({ status: 201, description: 'Developer created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request - validation error' })
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developersService.create(createDeveloperDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all developers' })
  @ApiResponse({
    status: 200,
    description: 'List of all developers with their projects',
  })
  findAll() {
    return this.developersService.findAll();
  }
}
