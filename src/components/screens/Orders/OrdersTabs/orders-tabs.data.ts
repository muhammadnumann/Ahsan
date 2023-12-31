import { IOrdersTab } from './orders-tabs.interface'

export const ordersTabs: IOrdersTab[] = [
  {
    text: 'new-orders',
    count: 6
  },
  {
    text: 'in-progress',
    count: 3
  },
  {
    text: 'order-ready',
    count: 0
  },
  {
    text: 'in-delivery',
    count: 0
  }
]
