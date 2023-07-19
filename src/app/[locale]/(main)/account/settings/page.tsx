'use client'

import { accountMenuItems } from '@/components/screens/Account/AccountMenu/account-menu.data'
import AccountTabTitle from '@/components/screens/Account/AccountTabTitle'
import CashLimiting from '@/components/screens/Account/Settings/CashLimiting'
import Delivery from '@/components/screens/Account/Settings/Delivery'
import PaymentSetup from '@/components/screens/Account/Settings/PaymentSetup/PaymentSetup'
import { IPaymentSetupFormValues } from '@/components/screens/Account/Settings/PaymentSetup/payment-setup.interface'
import SaveButton from '@/components/ui/Buttons/SaveButton'
import { AccountSetting } from '@/redux/services/Account'
import { SettingsSlice } from '@/redux/store/Account/AccountReducer'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const SettingsPage = () => {
  const { control, register, handleSubmit } = useForm<IPaymentSetupFormValues>({
    mode: 'all',
    defaultValues: {
      cashAccepted: true,
      onlineAccepted: true
    }
  })

  const dispatch = useDispatch()

  const onSubmit = handleSubmit(async (data) => {
    const res = await AccountSetting(data)
    dispatch(SettingsSlice(res))
  })

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete='off'
      className='w-[70%] mx-auto md:w-3/5'
    >
      <AccountTabTitle {...accountMenuItems[4]} />
      <div className='mt-8 flex flex-col gap-6'>
        <PaymentSetup control={control} />
        <CashLimiting control={control} />
        <Delivery control={control} />
      </div>
      <SaveButton className='mx-auto mt-[140px]' type='submit' />
    </form>
  )
}

export default SettingsPage
