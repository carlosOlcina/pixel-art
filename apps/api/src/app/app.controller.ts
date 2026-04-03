import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDateDto } from './dto/response-date.dto';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';

@Controller('/date')
export class AppController {
  // IN REAL CASE SHOULD IMPLEMENT AUTH SYSTEM

  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getDateById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseDateDto> {
    return await this.appService.getDateById(id);
  }

  @Get()
  async getDates(): Promise<ResponseDateDto[]> {
    return await this.appService.getDates();
  }

  @Post()
  createDate(@Body() dto: CreateDateDto): ResponseDateDto {
    return this.appService.createDate(dto);
  }

  @Patch(':id')
  async updateDate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateDateDto,
  ): Promise<ResponseDateDto> {
    return await this.appService.updateDate(id, dto);
  }

  @Delete(':id')
  async deleteDate(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    return await this.appService.deleteDate(id);
  }
}
