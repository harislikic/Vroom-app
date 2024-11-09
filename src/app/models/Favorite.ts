import { User } from "./User";

export interface Favorite {
    id: number;
    userId: number;
    user: User;
    automobileAdId: number;
  }