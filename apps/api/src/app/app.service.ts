import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { ResponseDateDto } from './dto/response-date.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DateEntity } from './entities/date.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AppService {
  dates: ResponseDateDto[] = [];

  constructor(
    @InjectRepository(DateEntity) private readonly repo: Repository<DateEntity>,
  ) {
    /* empty */
  }

  private formatResponse(entity: DateEntity): ResponseDateDto {
    return plainToClass(ResponseDateDto, entity);
  }

  async getDateById(id: string): Promise<ResponseDateDto> {
    const date = await this.repo.findOne({ where: { id } });
    if (!date) throw new NotFoundException('Date not found');
    return this.formatResponse(date);
  }

  async getDates(): Promise<ResponseDateDto[]> {
    const dates = await this.repo.find();

    return dates.map((d) => this.formatResponse(d));
  }

  async createDate(dto: CreateDateDto): Promise<ResponseDateDto> {
    const date = this.repo.create({
      id: dto.id,
      phone: dto.phone,
      date: dto.date,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    const saved = await this.repo.save(date);

    return this.formatResponse(saved);
  }

  async updateDate(id: string, dto: UpdateDateDto): Promise<ResponseDateDto> {
    await this.repo.update(id, dto);
    return await this.getDateById(id);
  }

  async deleteDate(id: string): Promise<string> {
    await this.repo.softDelete({ id: id });

    return id;
  }
}
