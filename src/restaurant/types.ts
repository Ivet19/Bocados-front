import type {
  CustomerService,
  PriceCategory,
  RestaurantDto,
  ServingsAmmount,
  WaitTime,
} from "./dto/typesDto";

export type Restaurant = Omit<RestaurantDto, "_id" | "visitDate"> & {
  id: string;
  imageAlt: string;
  servingsAmount?: ServingsAmmount;
  waitTime?: WaitTime;
  customerService?: CustomerService;
  priceCategory?: PriceCategory;
  rating?: number;
  visitDate?: string;
};
