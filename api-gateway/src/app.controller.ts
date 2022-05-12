import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderCreateInput } from './order-create.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  orderCreate(@Body() orderCreateInput: OrderCreateInput){
    this.appService.orderCreate(orderCreateInput)
  }
}
