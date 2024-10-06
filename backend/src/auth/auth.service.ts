import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bycrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { AccessToken } from './types/AccessToken';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Injectable()
export class AuthService {
  /**
   * Constructor
   * @ param userService User service
   * @ param jwtService JWT service
   */
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.userService.findOne(email, {
      groups: ['internal'],
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (!user.password) {
      throw new BadRequestException('Invalid user data');
    }

    if (!password) {
      throw new BadRequestException('Password is required');
    }

    let isMatch: boolean;
    try {
      isMatch = await bycrypt.compare(password, user.password);
    } catch (error) {
      console.error('Error comparing passwords:', error);
      throw new BadRequestException('Error validating credentials');
    }

    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }
  async login(user: User): Promise<AccessToken> {
    const payload = { email: user.email, uid: user.uid };
    return { access_token: this.jwtService.sign(payload) };
  }

  async register(user: RegisterRequestDto): Promise<AccessToken> {
    const existingUser = await this.userService.findOne(user.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bycrypt.hash(user.password, 10);
    const newUser: CreateUserInput = {
      first_name: user.first_name,
      last_name: user.last_name || '', // default to empty if not provided
      email: user.email,
      password: hashedPassword,
      image: user.image || '', // default to empty if not provided
      isActive: user.isActive ?? true, // default to true if not provided
      isVerified: user.isVerified ?? false,
    };
    const createdUser = await this.userService.create(newUser);
    return this.login(createdUser);
  }
}
