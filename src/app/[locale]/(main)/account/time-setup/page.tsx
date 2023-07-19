'use client'

import { accountMenuItems } from '@/components/screens/Account/AccountMenu/account-menu.data'
import AccountTabTitle from '@/components/screens/Account/AccountTabTitle'
import TimeSetupDays from '@/components/screens/Account/TimeSetup/TimeSetupDays'
import TimeSetupOptions from '@/components/screens/Account/TimeSetup/TimeSetupOptions'
import { timeSetupBaseDays } from '@/components/screens/Account/TimeSetup/time-setup.data'
import { ITimeSetupFormValues } from '@/components/screens/Account/TimeSetup/time-setup.interface'
import SaveButton from '@/components/ui/Buttons/SaveButton'
import { ISelectItem } from '@/components/ui/Select/select.interface'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const TimeSetupPage = () => {
  const t = useTranslations('Account.TimeSetup')
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [timeType, setTimeType] = useState<ISelectItem>({
    label: '24 hr',
    value: 24
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<ITimeSetupFormValues>({
    mode: 'all',
    defaultValues: {
      days: timeSetupBaseDays
    }
  })
  const { fields, replace } = useFieldArray({
    control,
    name: 'days'
  })

  const onSubmit = handleSubmit((data) => {})

  const applyForAll = () => {
    const { from, to } = getValues('days')[0]
    replace(fields.map(({ id }) => ({ id, from, to })))
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete='off'
      className='w-[70%] mx-auto md:w-1/2'
    >
      <AccountTabTitle {...accountMenuItems[3]} />
      <TimeSetupOptions
        timezone={timezone}
        timeType={timeType}
        setTimezone={setTimezone}
        setTimeType={setTimeType}
      />
      <div className='flex mt-5'>
        <TimeSetupDays control={control} fields={fields} errors={errors} />
        <div className='flex-1 flex items-end flex-col pb-1.5 pt-8 sm:pt-9 sm:pb-3 min-w-[80px]'>
          <div
            onClick={applyForAll}
            className='cursor-pointer font-medium text-xs text-[#30CDFF]'
          >
            {t('apply-for-all')}
          </div>
          <SaveButton className='mt-auto !w-auto' type='button' />
        </div>
      </div>
    </form>
  )
}

export default TimeSetupPage
