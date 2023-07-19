export interface IDirectDiscountFormValues {
  discountPercentage: string
  maxPriceForDiscount: string
  selectAll: boolean
  categories: { value: boolean; label: string }[]
}
