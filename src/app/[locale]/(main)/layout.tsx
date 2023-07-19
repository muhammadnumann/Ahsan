import Header from '@/components/ui/Header/Header'
import Navigation from '@/components/ui/Navigation/Navigation'
import { FC, PropsWithChildren } from 'react'

interface IMainLayout {
  params: { locale: string }
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  children,
  params
}) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header locale={params.locale} />
      {children}
      <Navigation />
    </div>
  )
}

export default MainLayout
