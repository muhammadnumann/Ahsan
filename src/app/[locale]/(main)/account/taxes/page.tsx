'use client'

import { accountMenuItems } from '@/components/screens/Account/AccountMenu/account-menu.data'
import AccountTabTitle from '@/components/screens/Account/AccountTabTitle'
import TaxesForm from '@/components/screens/Account/Taxes/TaxesForm/TaxesForm'

const TaxesPage = () => {
  return (
    <>
      <AccountTabTitle {...accountMenuItems[2]} />
      <TaxesForm />
    </>
  )
}

export default TaxesPage
