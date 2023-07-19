import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { IPaymentSetupFormValues } from './PaymentSetup/payment-setup.interface'

interface IDelivery {
  control: Control<IPaymentSetupFormValues, any>
}

const Delivery: FC<IDelivery> = ({ control }) => {
  const t = useTranslations('Account.Settings')

  return (
    <div>
      <div className='text-sm text-[#30CDFF] font-bold'>{t('delivery')}</div>
      <Input
        rhf={{
          control,
          name: 'deliveryShare',
          containerClass: 'mt-6 w-[200px]',
          label: { text: t('delivery-share') }
        }}
        placeholder='0.000 OMR'
      />
    </div>
  )
}

export default Delivery
