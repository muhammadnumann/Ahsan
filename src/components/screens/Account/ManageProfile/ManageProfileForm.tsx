'use client'

import SaveButton from '@/components/ui/Buttons/SaveButton'
import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { UseFormRegister, useForm } from 'react-hook-form'
import { accountMenuItems } from '../AccountMenu/account-menu.data'
import AccountTabTitle from '../AccountTabTitle'
import ManageProfileImgUploader from './ManageProfileImgUploader'
import { manageProfileInputs } from './manage-profile.data'
import { IManageProfileFormValues } from './manage-profile.interface'
import { EditManageProfile } from '@/redux/services/Account'
import { useDispatch } from 'react-redux'
import { ManageProfile } from '@/redux/store/Account/AccountReducer'

const ManageProfileForm = () => {
  const t = useTranslations('Account.ManageProfile')
  const { control, handleSubmit, register } = useForm<IManageProfileFormValues>(
    {
      mode: 'all'
    }
  )

  const dispatch = useDispatch()

  const onSubmit = handleSubmit(async (data) => {
    const res = await EditManageProfile(data)
    dispatch(ManageProfile(res))
  })

  return (
    <form onSubmit={onSubmit} noValidate autoComplete='off'>
      <AccountTabTitle {...accountMenuItems[0]} />
      <ul className='flex flex-col gap-[18px] mt-8'>
        {manageProfileInputs.map(({ name, placeholder }) => (
          <Input
            key={name}
            rhf={{
              control,
              name,
              variant: 'underline',
              containerClass: 'mx-auto w-full max-w-[276px]',
              rules: { required: true }
            }}
            placeholder={t(placeholder)}
            className='text-center'
          />
        ))}
      </ul>
      <Uploaders register={register} />
      <SaveButton className='mx-auto mt-10' type='submit' />
    </form>
  )
}

const Uploaders: FC<{
  register: UseFormRegister<IManageProfileFormValues>
}> = ({ register }) => {
  const t = useTranslations('Account.ManageProfile')

  return (
    <div className='flex gap-5 justify-center mt-7'>
      <ManageProfileImgUploader
        type='logo'
        register={register}
        name='appLogo'
        title={t('app-logo')}
      />
      <div className='flex flex-col gap-0.5'>
        <ManageProfileImgUploader
          type='banner'
          register={register}
          name='appBanner'
          title={t('app-banner')}
        />
        <ManageProfileImgUploader
          type='banner'
          register={register}
          name='listBanner'
          title={t('list-banner')}
        />
      </div>
    </div>
  )
}

export default ManageProfileForm
