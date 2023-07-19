import { FC } from 'react'
import { IOrder } from '../orders.interface'

const OrdersItemMainInfo: FC<IOrder> = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-min sm:text-xl'>Order {props.name}</div>
      <div className='text-min sm:text-lg text-[#5F5F5F]'>
        Items: {props.items.length}
      </div>
      <div className='text-min sm:text-lg text-[#5F5F5F]'>{props.date}</div>
    </div>
  )
}

export default OrdersItemMainInfo
