import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user.tequest.dto';
import { OrderCreateEvent } from './order-create-event';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreateEvent: OrderCreateEvent) {
    console.log(orderCreateEvent);

    this.authClient.send('get_user', new GetUserRequest(orderCreateEvent.userId)).subscribe((user) => {
      console.log(
        `Billing with stripe id ${user.userStrapeId} and the price is $${orderCreateEvent.price}....`
      );
    })

  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
