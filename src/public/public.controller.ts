import { Controller, Get } from '@nestjs/common';
import { ServicesService } from '../services/services.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('public')
@Controller('public')
export class PublicController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('services')
  @ApiOperation({ summary: 'Ver todos los servicios disponibles (sin autenticación)' })
  async getAllServices() {
    const services = await this.servicesService.findAll();
    return services.map((s) => ({
      title: s.title,
      category: s.category,
      price: s.price,
      freelancer: s.provider?.name,
    }));
  }
}
