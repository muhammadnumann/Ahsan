import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { ICoupon } from '../coupon-list.interface'

interface ICouponListItemFormDate {
  control: Control<ICoupon, any>
}

const CouponListItemFormDate: FC<ICouponListItemFormDate> = ({ control }) => {
  const t = useTranslations('Account.OffersManagement.CouponForm')

  return (
    <div className='mt-12 flex gap-x-[34px] gap-y-2 flex-col md:gap-y-7 md:flex-row md:text-lg'>
      <Input
        rhf={{
          control,
          name: 'fromDate',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true },
          label: {
            text: t('from-date'),
            className: 'md:!text-lg text-[#808080]'
          }
        }}
        placeholder='dd/mm/yyyy'
      />
      <Input
        rhf={{
          control,
          name: 'toDate',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true },
          label: { text: t('to-date'), className: 'md:!text-lg text-[#808080]' }
        }}
        placeholder='dd/mm/yyyy'
      />
    </div>
  )
}

export default CouponListItemFormDate
