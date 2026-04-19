import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeveloperDto {
  @ApiProperty({
    description: 'The name of the real estate developer',
    example: 'ABC Construction Ltd',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
