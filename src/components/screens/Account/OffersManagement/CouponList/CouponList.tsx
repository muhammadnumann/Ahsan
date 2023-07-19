import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import CouponListItemForm from './CouponListItemForm/CouponListItemForm'
import { ICoupon } from './coupon-list.interface'

const CouponList = () => {
  const t = useTranslations('Account.OffersManagement')
  const [isAdd, setIsAdd] = useState(false)
  const items = testData

  return (
    <div className='mt-3'>
      <div className='text-lg font-bold text-center'>{t('coupon-list')}</div>
      <div className='mt-1 flex flex-col gap-2'>
        {items.map((i) => (
          <Item key={i.id} {...i} />
        ))}
      </div>
      <div
        onClick={() => setIsAdd(true)}
        className='cursor-pointer flex justify-center items-center rounded-full mt-3.5 shadow-default bg-white mx-auto w-12 h-12'
      >
        <FaPlus size={24} />
      </div>
      {isAdd && <CouponListItemForm setIsOpen={setIsAdd} item={null} />}
    </div>
  )
}

const Item: FC<ICoupon> = (props) => {
  const [isDetails, setIsDetails] = useState(false)
  const t = useTranslations('Account.OffersManagement')

  return (
    <div className='flex items-center text-xs justify-between rounded border px-3.5 flex-col gap-y-2 py-1.5 border-gray-default md:flex-row'>
      <div>{props.name}</div>
      <div className='text-[#AE0000]'>{props.toDate}</div>
      <button
        className='text-blue-default'
        type='button'
        onClick={() => setIsDetails(true)}
      >
        {t('view-details')}
      </button>
      {isDetails && (
        <CouponListItemForm item={props} setIsOpen={setIsDetails} />
      )}
    </div>
  )
}

const testData: ICoupon[] = [
  {
    id: '1',
    name: 'TASTCOUPONCODE1',
    manualByClient: 'Amount Coupon',
    percentageDiscount: 'Percentage Discount',
    maxOrderAmount: '20',
    numberOfUses: '2',
    percentage: 'test 1',
    fromDate: '23/06/2023',
    toDate: '26/06/2023'
  },
  {
    id: '2',
    name: 'TASTCOUPONCODE2',
    manualByClient: 'Manual by Client',
    percentageDiscount: 'Amount Coupon',
    maxOrderAmount: '3',
    numberOfUses: '3',
    percentage: 'test 2',
    fromDate: '20/06/2023',
    toDate: '21/06/2023'
  },
  {
    id: '3',
    name: 'TASTCOUPONCODE3',
    manualByClient: 'Manual by Client',
    percentageDiscount: 'Percentage Discount',
    maxOrderAmount: '2',
    numberOfUses: '1',
    percentage: 'test 3',
    fromDate: '01/05/2023',
    toDate: '10/05/2023'
  }
]

export default CouponList
