import { useTranslations } from 'next-intl'
import DirectDiscountTable from './DirectDiscountTable/DirectDiscountTable'

const DirectDiscount = () => {
  const t = useTranslations('Account.OffersManagement')

  return (
    <div className='mt-12'>
      <div className='text-lg font-bold text-center'>
        {t('direct-discount')}
      </div>
      <DirectDiscountTable />
    </div>
  )
}

export default DirectDiscount
