import SaveButton from '@/components/ui/Buttons/SaveButton'
import { useFieldArray, useForm } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { ITaxesFormValues } from '../taxes.inteface'
import TaxesFormItem from './TaxesFormItem'

const TaxesForm = () => {
  const { control, handleSubmit } = useForm<ITaxesFormValues>({
    mode: 'all',
    defaultValues: {
      taxes: [
        {
          englishTitle: 'Muncipality Tax',
          arabicTitle: 'ضريبة البلدية',
          percentages: '5%'
        }
      ]
    }
  })
  const { fields, append, remove } = useFieldArray({ name: 'taxes', control })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const addTax = () => {
    append(
      { englishTitle: '', arabicTitle: '', percentages: '' },
      { shouldFocus: true }
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete='off'
      className='border border-gray-default mt-8 rounded-xl w-[320px] flex flex-col gap-4 px-3 py-4 mx-auto min-h-[220px] sm:w-[370px]'
    >
      {fields.map((f, i) => (
        <TaxesFormItem key={f.id} index={i} control={control} remove={remove} />
      ))}
      <div className='flex justify-center mt-4'>
        <div
          className='cursor-pointer rounded-full shadow-default bg-white p-2'
          onClick={addTax}
        >
          <AiOutlinePlus size={24} />
        </div>
      </div>
      <SaveButton className='ml-auto mt-auto' type='submit' />
    </form>
  )
}

export default TaxesForm
