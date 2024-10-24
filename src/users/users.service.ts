import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findOne(id: number): Promise<Users | undefined> {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findOneByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async create(data: Users): Promise<Users | undefined> {
    return this.userRepository.save(data);
  }
}
