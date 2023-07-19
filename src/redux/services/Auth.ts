import { postRequest } from "."
import { LOGIN_URL } from "./ApiConstants"

export const UserLogin = async (data: any) => {
  try {
    let response: any = await postRequest(LOGIN_URL, data)
    return response
  } catch (error) {

  }
}