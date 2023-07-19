import { getTokenCookie } from '../store/Auth/AuthActions';
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getRequest(url: string) {
  try {
    let res = await axios.get(API_URL + url)
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export const isAuthenticated = () => {
  const token = getTokenCookie()
  return token !== undefined && token !== null && token !== ''
}

export async function getBearerRequest(url: string) {
  try {
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getTokenCookie(),
      },
    }

    let res = await axios.get(API_URL + url, options)
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export async function postRequest(url: string, data: any) {
  try {
    console.log(API_URL)
    const options = {
      headers: {
        ContentType: "application/json",
      },
    }
    let res = await axios.post(API_URL + url, data, {})
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export async function postBearerRequest(url: string, data: any) {
  try {
    const options = {
      headers: {
        Authorization: getTokenCookie(),
      },
    }
    let res = await axios.post(API_URL + url, data, options)
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export async function deleteRequest(url: string) {
  try {
    let res = await axios.delete(url)

    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export async function postFormDataRequest(url: string, data: any) {
  try {
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: getTokenCookie(),
      },
    }

    let res = await axios.post(API_URL + url, data, options)
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export async function putFormDataRequest(url: string, data: any) {
  try {
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: getTokenCookie(),
      },
    }

    const form_data = new FormData()
    for (let key in data) form_data.append(key, data[key])

    let res = await axios.put(API_URL + url, form_data, options)
    return res.data
  } catch (e) {
    throw handler(e)
  }
}

export function handler(err: any) {
  let error = err

  if (err.response && err.response.data.hasOwnProperty('message')) error = err.response.data
  else if (!err.hasOwnProperty('message')) error = err.toJSON()

  // console.log("hex", error.message);
  return error.message
}