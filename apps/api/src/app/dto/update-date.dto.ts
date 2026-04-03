import {
  IsDateString,
  IsEnum,
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
  @IsEnum(['pending', 'confirmed', 'cancelled', 'completed'])
  status: boolean;
}
