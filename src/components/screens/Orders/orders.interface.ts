export interface IOrder {
  type: 'new' | 'progress' | 'ready' | 'delivery'
  paymentType: 'cash' | 'card'
  name: string
  number: number
  date: string
  items: any[]
  status: 'accepted' | 'not-accepted'
}
