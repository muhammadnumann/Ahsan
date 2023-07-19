import { useTranslations } from 'next-intl'

const AccountMenuSignout = () => {
  const t = useTranslations('Account.Menu')

  return <button className='text-[#888888]'>{t('signout')}</button>
}

export default AccountMenuSignout
