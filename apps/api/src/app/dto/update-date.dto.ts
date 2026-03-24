import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
} from 'class-validator';

export class UpdateDateDto {
  @IsOptional()
  @IsUUID()
  id: string = crypto.randomUUID();

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
