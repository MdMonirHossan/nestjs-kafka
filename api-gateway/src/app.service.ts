import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreateInput } from './order-create.dto';
import { OrderCreatedEvent } from './order-create.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  orderCreate(orderCreateInput: OrderCreateInput) {
    const {userId , price } = orderCreateInput;
    this.billingClient.emit(
      'order_created', 
      new OrderCreatedEvent('123', userId, price)
    )
  }
}
