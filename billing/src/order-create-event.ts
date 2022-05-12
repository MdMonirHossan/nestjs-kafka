export class OrderCreateEvent {
  constructor(
    public readonly userId: string,
    public readonly orderId: string,
    public readonly price: number,
  ) {}
}
