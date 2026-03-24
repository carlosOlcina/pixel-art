import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateDateDto {
  @Exclude()
  id: string;

  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @IsOptional()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsBoolean()
  confirmed: boolean;
}
