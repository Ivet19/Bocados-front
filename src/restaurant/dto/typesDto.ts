export interface RestaurantDto {
  _id: string;
  name: string;
  adress: string;
  foodType: string;
  imageUrl: string;
  description: string;
  isVisited: boolean;
  servingsAmount?: ServingsAmmount;
  waitTime?: WaitTime;
  customerService?: CustomerService;
  priceCategory?: PriceCategory;
  rating?: number;
  visitDate?: string;
}

export type ServingsAmmount = "Poca" | "Normal" | "Generosa";

export type WaitTime = "Poco" | "Normal" | "Mucho";

export type CustomerService =
  | "Muy malo"
  | "Malo"
  | "Regular"
  | "Bueno"
  | "Muy bueno";

export type PriceCategory = "Bajo" | "Medio" | "Alto";
