'use client'

import { accountMenuItems } from '@/components/screens/Account/AccountMenu/account-menu.data'
import AccountTabTitle from '@/components/screens/Account/AccountTabTitle'
import CouponList from '@/components/screens/Account/OffersManagement/CouponList/CouponList'
import DirectDiscount from '@/components/screens/Account/OffersManagement/DirectDiscount/DirectDiscount'

const OffersManagementPage = () => {
  return (
    <div className='w-3/5 mx-auto md:w-1/2'>
      <AccountTabTitle {...accountMenuItems[1]} />
      <DirectDiscount />
      <CouponList />
    </div>
  )
}

export default OffersManagementPage
