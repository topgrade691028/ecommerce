import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(3)
  first_name: string;

  @Field()
  @IsOptional()
  @MaxLength(100)
  last_name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsOptional()
  image: string;

  @Field()
  @IsBoolean()
  isActive: boolean;

  @Field()
  @IsBoolean()
  isVerified: boolean;

  @Field()
  @IsNotEmpty()
  password: string;
}
