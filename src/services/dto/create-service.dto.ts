import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ example: 'Diseño de logo profesional' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Diseño' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 'Diseño de logotipos modernos con entrega en 3 días hábiles' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 50 })
  @IsNumber()
  @Min(0)
  price: number;
}
