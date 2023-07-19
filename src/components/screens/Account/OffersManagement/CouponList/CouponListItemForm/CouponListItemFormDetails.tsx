import Input from '@/components/ui/Inputs/Input'
import Select from '@/components/ui/Select/Select'
import { ISelectItem } from '@/components/ui/Select/select.interface'
import { useTranslations } from 'next-intl'
import { Dispatch, FC, SetStateAction } from 'react'
import { Control } from 'react-hook-form'
import {
  manualByClientOptions,
  percentageDiscountOptions
} from '../coupon-list.data'
import { ICoupon } from '../coupon-list.interface'

interface ICouponListItemFormDetails {
  control: Control<ICoupon, any>
  manualByClient: ISelectItem
  percentageDiscount: ISelectItem
  setManualByClient: Dispatch<SetStateAction<ISelectItem>>
  setPercentageDiscount: Dispatch<SetStateAction<ISelectItem>>
}

const CouponListItemFormDetails: FC<ICouponListItemFormDetails> = (props) => {
  const t = useTranslations('Account.OffersManagement.CouponForm')

  return (
    <div className='flex gap-x-[34px] gap-y-2 mt-4 flex-col md:gap-y-7 md:text-lg md:flex-row md:flex-wrap'>
      <Input
        rhf={{
          control: props.control,
          name: 'name',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true }
        }}
        className='text-center'
        placeholder={t('coupon-name')}
      />
      <Select
        options={manualByClientOptions}
        value={props.manualByClient}
        setValue={props.setManualByClient}
        variant='underline'
        containerClass='md:w-[276px]'
        labelClass='text-blue-default text-center'
      />
      <Select
        options={percentageDiscountOptions}
        value={props.percentageDiscount}
        setValue={props.setPercentageDiscount}
        variant='underline'
        containerClass='md:w-[276px]'
        labelClass='text-blue-default text-center'
      />
      <Input
        rhf={{
          control: props.control,
          name: 'maxOrderAmount',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true }
        }}
        className='text-center'
        placeholder={t('max-order-amount')}
      />
      <Input
        rhf={{
          control: props.control,
          name: 'percentage',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true }
        }}
        className='text-center'
        placeholder={t('percentage')}
      />
      <Input
        rhf={{
          control: props.control,
          name: 'numberOfUses',
          variant: 'underline',
          containerClass: 'md:w-[276px]',
          rules: { required: true }
        }}
        className='text-center'
        placeholder={t('number-of-uses')}
      />
    </div>
  )
}

export default CouponListItemFormDetails
