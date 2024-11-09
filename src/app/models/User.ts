export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  adress: string;
  gender: string;
  isAdmin: boolean;
  dateOfBirth: Date;
  profilePicture?: string | null;
  cityId: number;
}
