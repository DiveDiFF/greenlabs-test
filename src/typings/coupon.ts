export type CouponItem = {
  id: string;
  minPrice: number;
  duplication: boolean;
  company: string;
  discountPrice?: number;
  discountPercent?: number;
  freeShipping?: boolean;
  isApplied: boolean;
};

export type ValidateCheck = {
  id: string;
  duplication: boolean;
};
