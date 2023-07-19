'use client'

import OrdersItem from '@/components/screens/Orders/OrdersItem/OrdersItem'
import OrdersTabs from '@/components/screens/Orders/OrdersTabs/OrdersTabs'
import { useState } from 'react'

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='w-4/5 mx-auto mt-[22px]'>
      <OrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='flex flex-col gap-6'>
        {activeTab === 0 && (
          <OrdersItem
            type='new'  
            date='2 minutes ago'
            name='#167290'
            items={[1, 2, 3]}
            number={22}
            paymentType='cash'
            status='not-accepted'
          />
        )}
        {activeTab === 1 && (
          <OrdersItem
            type='progress'
            date='4 minutes ago'
            name='#167289'
            items={[1, 2]}
            number={21}
            paymentType='card'
            status='accepted'
          />
        )}
        {activeTab === 3 && (
          <OrdersItem
            type='delivery'
            date='4 minutes ago'
            name='#167289'
            items={[1, 2]}
            number={21}
            paymentType='card'
            status='accepted'
          />
        )}
      </div>
    </div>
  )
}

export default OrdersPage
