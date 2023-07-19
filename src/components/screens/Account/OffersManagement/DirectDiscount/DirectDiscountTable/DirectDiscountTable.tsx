import SaveButton from '@/components/ui/Buttons/SaveButton'
import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Control, useFieldArray, useForm } from 'react-hook-form'
import { IDirectDiscountFormValues } from '../direct-discount.interface'
import DirectDiscountTableCategory from './DirectDiscountTableCategory'

const DirectDiscountTable = () => {
  const { control, register, handleSubmit } =
    useForm<IDirectDiscountFormValues>({
      mode: 'all',
      defaultValues: {
        categories: [
          { label: 'Desserts & Drinks', value: false },
          { label: 'Desserts & Drinks', value: false },
          { label: 'Desserts & Drinks', value: false },
          { label: 'Desserts & Drinks', value: false }
        ]
      }
    })

  const { fields, replace } = useFieldArray({ control, name: 'categories' })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const selectAll = (isSelect: boolean) => {
    replace(fields.map((f) => ({ ...f, value: isSelect })))
  }

  return (
    <form
      noValidate
      autoComplete='off'
      onSubmit={onSubmit}
      className='w-full mt-2 border border-gray-default rounded-xl px-[22px] py-4'
    >
      <Inputs control={control} />
      <DirectDiscountTableCategory
        register={register}
        selectAll={selectAll}
        fields={fields}
      />
      <div className='flex justify-end mt-10'>
        <SaveButton className='!w-auto' />
      </div>
    </form>
  )
}

const Inputs: FC<{ control: Control<IDirectDiscountFormValues, any> }> = ({
  control
}) => {
  const t = useTranslations('Account.OffersManagement')

  return (
    <div className='flex gap-2 justify-between flex-col sm:items-center sm:gap-8 md:gap-[51px] sm:flex-row'>
      <Input
        rhf={{
          control,
          name: 'discountPercentage',
          variant: 'underline',
          rules: { required: true }
        }}
        placeholder={t('discount-percentage')}
        className='!px-0.5 text-xs'
      />
      <Input
        rhf={{
          control,
          name: 'maxPriceForDiscount',
          variant: 'underline',
          rules: { required: true }
        }}
        placeholder={t('max-price-for-discount')}
        className='!px-0.5 text-xs'
      />
    </div>
  )
}

export default DirectDiscountTable
