import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { ResponseDateDto } from './dto/response-date.dto';

@Injectable()
export class AppService {
  dates: ResponseDateDto[] = [];

  getDateById(id: string): ResponseDateDto {
    const date = this.dates.find((date) => date.id === id);
    if (!date) throw new NotFoundException('Date not found');
    return date;
  }

  getDates(): ResponseDateDto[] {
    return this.dates;
  }

  createDate(dto: CreateDateDto): ResponseDateDto {
    const date = this.dates.push({
      id: dto.id,
      phone: dto.phone,
      date: dto.date,
      confirmed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return this.dates[date - 1];
  }

  updateDate(id: string, dto: UpdateDateDto): ResponseDateDto {
    const date = this.dates.find((date) => date.id === id);

    if (!date) throw new NotFoundException('Date not found');

    const updatedDate = {
      ...date,
      ...dto,
      updatedAt: new Date().toISOString(),
    };

    this.dates = this.dates.map((date) =>
      date.id === id ? updatedDate : date,
    );

    return updatedDate;
  }

  deleteDate(id: string): string {
    const date = this.dates.findIndex((date) => date.id === id);

    if (date < 0) throw new NotFoundException('Date not found');

    this.dates.splice(date, 1);

    return id;
  }
}
