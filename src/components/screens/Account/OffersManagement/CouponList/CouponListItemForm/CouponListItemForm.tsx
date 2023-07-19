import CancelButton from '@/components/ui/Buttons/CancelButton'
import SaveButton from '@/components/ui/Buttons/SaveButton'
import { useOutside } from '@/hooks/useOutside'
import { useTranslations } from 'next-intl'
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import { useForm } from 'react-hook-form'
import {
  manualByClientOptions,
  percentageDiscountOptions
} from '../coupon-list.data'
import { ICoupon } from '../coupon-list.interface'
import CouponListItemFormDate from './CouponListItemFormDate'
import CouponListItemFormDetails from './CouponListItemFormDetails'

interface ICouponListItemForm {
  item: ICoupon | null
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CouponListItemForm: FC<ICouponListItemForm> = (props) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  return (
    <div className='fixed w-full h-full z-[100] p-5 left-0 top-0 bg-black/20 flex justify-center items-center'>
      <Form {...props} />
    </div>
  )
}

const Form: FC<ICouponListItemForm> = (props) => {
  const ref = useRef<HTMLFormElement>(null)
  useOutside(ref, () => props.setIsOpen(false))

  const t = useTranslations('Account.OffersManagement')
  const [manualByClient, setManualByClient] = useState(
    manualByClientOptions.find((i) => i.value === props.item?.manualByClient) ??
      manualByClientOptions[0]
  )
  const [percentageDiscount, setPercentageDiscount] = useState(
    percentageDiscountOptions.find(
      (i) => i.value === props.item?.percentageDiscount
    ) ?? percentageDiscountOptions[0]
  )
  const { control, handleSubmit } = useForm<ICoupon>({
    mode: 'all',
    defaultValues: {
      ...props.item
    }
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      noValidate
      autoComplete='off'
      className='w-[645px] overflow-hidden bg-white rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]'
    >
      <div className='max-h-[500px] overflow-y-auto p-7'>
        <div className='text-2xl font-bold'>{t('add-coupon')}</div>
        <CouponListItemFormDetails
          control={control}
          manualByClient={manualByClient}
          percentageDiscount={percentageDiscount}
          setManualByClient={setManualByClient}
          setPercentageDiscount={setPercentageDiscount}
        />
        <CouponListItemFormDate control={control} />
        <div className='flex justify-between items-center mt-20'>
          <CancelButton
            onClick={() => props.setIsOpen(false)}
            className='text-lg'
          />
          <SaveButton className='!w-auto !text-2xl' />
        </div>
      </div>
    </form>
  )
}

export default CouponListItemForm
