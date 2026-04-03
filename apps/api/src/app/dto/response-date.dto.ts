import { Expose, Transform } from 'class-transformer';

export class ResponseDateDto {
  @Expose()
  id: string;

  @Expose()
  phone: string;

  @Expose()
  date: string;

  @Expose()
  status: string;

  @Expose()
  @Transform(({ value }) => new Date(value).toISOString())
  createdAt: string;

  @Transform(({ value }) => new Date(value).toISOString())
  @Expose()
  updatedAt: string;
}
