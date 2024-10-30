import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Member } from './database/tables/member.entity';
import { DatabseModule } from './database/database.module';

console.log(`Database name: ${process.env.DATABASE_NAME}`);
@Module({
  imports: [
    DatabseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
