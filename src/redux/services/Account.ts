import { postRequest } from "."
import { ACCOUNT_SETTING, EDIT_PROFILE } from "./ApiConstants"

export const AccountSetting = async (data: any) => {
  try {
    const apiData = {
      vendor_id: 107,
      is_cash_payment_enable: data.cashAccepted ? 1 : 0,
      is_digital_payment_enable: data.onlineAccepted ? 1 : 0,
      minimum_cash_price: data.minimumCashOrder,
      maximum_cash_price: data.maximumCashOrder,
      delivery_charge_pay_by_us: data.deliveryShare,
      use_our_drivers: 0,
    }
    const response = await postRequest(ACCOUNT_SETTING, apiData)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const EditManageProfile = async (data: any) => {
  try {
    const apiData = {
      company_name: data.englishName,
      company_name_arab: data.arabicName,
      description: data.englishDesc,
      description_arab: data.arabicDesc,
      brand_location: 1,
      company_currency: "OMR",
      phone_number: data.mobile,
      store_address: "Al Wadi Al Gadid Desert, New Valley Governorate, Egypt",
      latitude: 31.4128,
      longitude: 34.3503,
      store_category: 1,
      owner_f_name: 'ofirstname',
      owner_l_name: 'olastname',
      owner_mobile_number: 1,
      owner_phone_number: 1,
      store_timezone: 0,

    }
    const res = await postRequest(EDIT_PROFILE, apiData)
    return res
  } catch (error) {

  }
}