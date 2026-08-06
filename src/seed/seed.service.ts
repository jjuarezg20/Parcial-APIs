import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.usersRepository.count();
    if (count === 0) {
      const users = [
        {
          email: 'ana@freelance.com',
          name: 'Ana García',
          password: await bcrypt.hash('123456', 10),
        },
        {
          email: 'luis@freelance.com',
          name: 'Luis Martínez',
          password: await bcrypt.hash('123456', 10),
        },
      ];
      await this.usersRepository.save(users);
      console.log('Seed completado: 2 usuarios freelancers creados');
    }
  }
}
