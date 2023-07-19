import { Path } from 'react-hook-form'

export interface IManageProfileFormValues {
  englishName: string
  arabicName: string
  englishDesc: string
  arabicDesc: string
  mobile: string
  email: string

  appLogo: FormData
  appBanner: FormData
  listBanner: FormData
}

export interface IManageProfileInput {
  name: Path<IManageProfileFormValues>
  placeholder:
    | 'english-name'
    | 'arabic-name'
    | 'english-desc'
    | 'arabic-desc'
    | 'mobile'
    | 'email'
}
