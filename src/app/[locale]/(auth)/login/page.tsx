import LoginFooterText from '@/components/screens/Auth/Login/LoginFooterText'
import LoginForm from '@/components/screens/Auth/Login/LoginForm/LoginForm'
import Logo from '@/components/screens/Auth/Login/Logo'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher'


const LoginPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center p-4'>
      <div className='shadow-default relative p-[22px] rounded-[29px] bg-white h-[714px] mx-4 flex flex-col justify-center items-center gap-[47px] w-[96%] sm:w-4/5 xl:w-1/2'>
        <Logo />
        <LoginForm />
        <LoginFooterText />
        <div className='absolute left-11 top-10'>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
