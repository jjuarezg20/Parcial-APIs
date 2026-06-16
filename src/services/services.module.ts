import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { PublicController } from '../public/public.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), UsersModule],
  providers: [ServicesService],
  controllers: [ServicesController, PublicController],
  exports: [ServicesService],
})
export class ServicesModule {}
