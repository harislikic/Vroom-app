import { AutmobileAdEquipment } from "./AutomobileAdEquipment";
import { AutomobileAdImage } from "./AutomobileAdImage";
import { CarBrand } from "./CarBrand";
import { CarCategory } from "./CarCategory";
import { CarModel } from "./CarModel";
import { Favorite } from "./Favorite";
import { FuelType } from "./FuelType";
import { Reservation } from "./Reservation";
import { TransmissionType } from "./TransmissionType";
import { User } from "./User";

export interface AutomobileAd {
  id: number;
  title: string;
  description: string;
  price: number;
  dateOFadd: Date;
  viewsCount: number;
  yearOfManufacture: number;
  registered: boolean;
  registrationExpirationDate: Date;
  status: string;
  featuredExpiryDate: Date;
  last_Small_Service: Date;
  last_Big_Service: Date;
  milage: number;
  userId: number;
  user: User;
  carBrandId: number;
  carBrand: CarBrand;
  carCategoryId?: number | null;
  carCategory?: CarCategory | null;
  carModelId?: number | null;
  carModel?: CarModel | null;
  //comments: Comment[];
  fuelTypeId?: number | null;
  fuelType?: FuelType | null;
  reservations: Reservation[];
  transmissionTypeId?: number | null;
  transmissionType?: TransmissionType | null;
  favorites: Favorite[];
  images: AutomobileAdImage[];
  automobileAdEquipments: AutmobileAdEquipment[];
  enginePower: number;
  numberOfDoors: number;
  cubicCapacity: number;
  horsePower: number;
  color: string;
}
