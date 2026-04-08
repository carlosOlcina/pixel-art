import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateEntity } from './entities/date.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.MARIADB_HOST || 'localhost',
      port: Number(process.env.MARIADB_PORT) || 3306,
      username: process.env.MARIADB_USER || 'mariadb',
      password: process.env.MARIADB_PASSWORD || 'mariadb',
      database: process.env.MARIADB_DATABASE || 'pixelart',
      entities: [DateEntity],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    TypeOrmModule.forFeature([DateEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
