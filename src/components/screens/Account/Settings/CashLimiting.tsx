import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { IPaymentSetupFormValues } from './PaymentSetup/payment-setup.interface'

interface ICashLimiting {
  control: Control<IPaymentSetupFormValues, any>
}

const CashLimiting: FC<ICashLimiting> = ({ control }) => {
  const t = useTranslations('Account.Settings')

  return (
    <div className=''>
      <div className='text-sm text-[#30CDFF] font-bold'>
        {t('cash-limiting')}
      </div>
      <div className='mt-6 flex flex-col gap-8 w-[200px] md:w-full md:items-center md:flex-row'>
        <Input
          rhf={{
            control,
            name: 'minimumCashOrder',
            label: { text: t('minimum-cash-to-order') }
          }}
        />
        <Input
          rhf={{
            control,
            name: 'maximumCashOrder',
            label: { text: t('maximum-cash-to-order') }
          }}
        />
      </div>
    </div>
  )
}

export default CashLimiting
