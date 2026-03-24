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
  getDateById(@Param('id', ParseUUIDPipe) id: string): ResponseDateDto {
    return this.appService.getDateById(id);
  }

  @Get()
  getDates(): ResponseDateDto[] {
    return this.appService.getDates();
  }

  @Post()
  createDate(@Body() dto: CreateDateDto): ResponseDateDto {
    return this.appService.createDate(dto);
  }

  @Patch(':id')
  updateDate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateDateDto,
  ): ResponseDateDto {
    return this.appService.updateDate(id, dto);
  }

  @Delete(':id')
  deleteDate(@Param('id', ParseUUIDPipe) id: string): string {
    return this.appService.deleteDate(id);
  }
}
