import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user.request.dto';

@Injectable()
export class AppService {

  private readonly users : any[] = [
    {
      userId : '123',
      userStrapeId : 4562
    },
    {
      userId : '231',
      userStrapeId : 5562
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest){
    return this.users.find((user) => user.userId === getUserRequest.userId)
  }
}
