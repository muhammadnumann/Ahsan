import Input from '@/components/ui/Inputs/Input'
import { FC } from 'react'
import { Control, UseFieldArrayRemove } from 'react-hook-form'
import { LuTrash2 } from 'react-icons/lu'
import { ITaxesFormValues } from '../taxes.inteface'

interface ITaxesFormItem {
  index: number
  control: Control<ITaxesFormValues, any>
  remove: UseFieldArrayRemove
}

const TaxesFormItem: FC<ITaxesFormItem> = ({ index, control, remove }) => {
  return (
    <div className='flex gap-3.5 p-1.5 rounded-lg items-center bg-white shadow-icon'>
      <div
        className='rounded-full border border-gray-100 p-1 cursor-pointer'
        onClick={() => remove(index)}
      >
        <LuTrash2 color='#FF5151' size={14} />
      </div>
      <div className='flex gap-1 items-center'>
        <Input
          rhf={{
            control,
            name: `taxes.${index}.englishTitle`,
            variant: 'underline',
            rules: { required: true }
          }}
          className='text-xs'
          dir='ltr'
        />
        <Input
          rhf={{
            control,
            name: `taxes.${index}.arabicTitle`,
            variant: 'underline',
            rules: { required: true }
          }}
          className='text-xs'
          dir='rtl'
        />
        <Input
          rhf={{
            control,
            name: `taxes.${index}.percentages`,
            variant: 'underline',
            rules: { required: true },
            containerClass: 'w-[30%]'
          }}
          className='text-xs text-center'
        />
      </div>
    </div>
  )
}

export default TaxesFormItem
