import { Transform } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @Transform(({ value }) => value.trim())
  name: string;
  
  @IsEmail()
  @Transform(({ value }) => value.trim())
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  phone: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @Transform(({ value }) => value.trim())
  address: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  city: string;
}
