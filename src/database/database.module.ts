import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MemberController } from './controller/member.controller';
import { MemberService } from './services/member-service';
import { Member } from 'src/database/tables/member.entity';
import { join } from 'path';
import { OrderController } from './controller/order.controller';
import { OrderService } from './services/order-service';
import { Order } from './tables/order.entity';

console.log(`Database name: ${process.env.DATABASE_NAME}`);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),    
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE == 'mysql'? 'mysql' : 'sqlite',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER ,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true, //use this with development environment
      entities: [join(__dirname, '../**/*.entity.js').replace(/\\/g, '/')],
      // entities: [
      //   Member,
      // ],
  }),  
  TypeOrmModule.forFeature([
    Member,
    Order
  ])   
  ],
  controllers: [
    MemberController,
    OrderController
],
  providers: [
    MemberService,
    OrderService
],
})
export class DatabseModule {

}
