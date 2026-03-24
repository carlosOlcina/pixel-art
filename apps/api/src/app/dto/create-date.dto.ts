import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
} from 'class-validator';

export class CreateDateDto {
  @IsOptional()
  @IsUUID()
  id: string = crypto.randomUUID();

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;
}
