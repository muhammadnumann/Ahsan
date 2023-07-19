'use client'

import Input from '@/components/ui/Inputs/Input'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import LoginFormButton from './LoginFormButton'
import { postRequest } from '@/redux/services'
import { LOGIN_URL } from '@/redux/services/ApiConstants'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogin } from '@/redux/store/Auth/AuthReducer'
import { UserLogin } from '@/redux/services/Auth'
import { ProductListingApi, ProductTaxListingApi } from '@/redux/services/Product'

interface IFormValues {
  email: string
  password: string
}

const LoginForm = () => {
  const t = useTranslations('Login')
  const { control, handleSubmit } = useForm<IFormValues>({ mode: 'all' })
  const dispatch = useDispatch()

  const onSubmit = handleSubmit(async (data) => {

    const response = await UserLogin(data)

    dispatch(AuthLogin({ payload: response }))

    window.location.href = `/`;

  })
  const fun = async () => {

    const res = await ProductTaxListingApi({ page: 0 })

    console.log(res)
  }

  fun()


  return (
    <form
      noValidate
      autoComplete='off'
      onSubmit={onSubmit}
      className='self-start w-full'
    >
      <div className='flex flex-col gap-3.5'>
        <Input
          rhf={{
            control,
            name: 'email',
            label: { text: t('email'), className: 'text-[#7B7878]' },
            rules: { required: true },
            containerClass: 'mx-auto w-full max-w-[280px] sm:max-w-[367px]'
          }}
        />
        <Input
          rhf={{
            control,
            name: 'password',
            label: { text: t('password'), className: 'text-[#7B7878]' },
            rules: { required: true },
            containerClass: 'mx-auto w-full max-w-[280px] sm:max-w-[367px]'
          }}
        />
      </div>
      <LoginFormButton />
    </form>
  )
}

export default LoginForm
