import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, QueryFailedError, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(UserInput: Partial<User>): Promise<User> {
    try {
      const user = this.userRepository.create(UserInput);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new Error('Database error: ' + error.message);
      }
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneByUID(uid: string): Promise<User> {
    return await this.userRepository.findOneBy({ uid });
  }

  async findOne(email: string, options?: { groups: string[] }): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && options?.groups?.includes('internal')) {
      // This ensures the password is included when the 'internal' group is specified
      return plainToClass(User, user, { groups: options.groups });
    }
    return user;
  }

  async update(uid: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update(uid, updateUserInput);
    return this.userRepository.findOneBy({ uid });
  }

  async remove(uid: string): Promise<DeleteResult> {
    return await this.userRepository.delete(uid);
  }
}
