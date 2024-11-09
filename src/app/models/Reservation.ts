import { User } from "./User";

export interface Reservation {
    id: number;
    reservationDate: Date;
    userId: number;
    user: User;
    automobileAdId: number;
  }