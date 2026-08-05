import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { User } from './users/user.entity';
import { Service } from './services/service.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5433,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'freelancehub',
      entities: [User, Service],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ServicesModule,
    SeedModule,
  ],
})
export class AppModule {}
