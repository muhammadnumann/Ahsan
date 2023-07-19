import { useLang } from '@/hooks/useLang'
import cn from 'clsx'
import { FC } from 'react'
import { IOrder } from '../orders.interface'
import OrderItemCourier from './OrderItemCourier'
import OrdersItemMainInfo from './OrderItemMainInfo'
import OrderItemNumberAndCash from './OrderItemNumberAndCash'
import OrderItemStatus from './OrderItemStatus'

const OrdersItem: FC<IOrder> = (props) => {
  const { isEnglish } = useLang()

  return (
    <div className='flex items-center gap-2 border-b border-b-[#B9B9B9] py-4 sm:gap-4'>
      <OrderItemStatus isActive={props.status === 'accepted'} />
      <OrdersItemMainInfo {...props} />
      {props.type === 'delivery' && (
        <OrderItemCourier name='Jason Statham' startDate='3 minutes ago' />
      )}
      <div
        className={cn(
          'self-end flex items-center gap-5 sm:gap-[34px]',
          isEnglish ? 'ml-auto' : 'mr-auto'
        )}
      >
        {props.type === 'progress' && (
          <button className='w-[70px] h-8 rounded-lg border border-blue-default text-blue-default font-bold text-sm sm:w-[109px] sm:h-[52px] sm:text-xl'>
            Ready
          </button>
        )}
        <OrderItemNumberAndCash {...props} />
      </div>
    </div>
  )
}

export default OrdersItem
