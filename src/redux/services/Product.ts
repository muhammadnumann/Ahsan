import { useSelector } from "react-redux"
import { postRequest } from "."
import { getLocalStorage } from "../store/Auth/AuthActions"
import { ADD_PRODUCT_TAX_LIST, CREATE_PRODUCT, DELETE_PRODUCT_TAX, PRODUCT_CATEGORY, PRODUCT_LIST, PRODUCT_SUBCATEGORY, PRODUCT_TAX_LIST } from "./ApiConstants"

export const ProductListingApi = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  formData.append("page", data.page)
  formData.append("search", data.search)

  try {
    const res = await postRequest(PRODUCT_LIST, formData)
    return res
  } catch (error) {

  }
}

export const ProductTaxListingApi = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  formData.append("page", data.page)
  formData.append("search", data.search)
  try {
    const res = await postRequest(PRODUCT_TAX_LIST, formData)
    return res
  } catch (error) {

  }
}

export const AddProductTaxListingApi = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')

  for (const key in data) {
    formData.append(key, data[key]);
  }

  // const apiData = {
  //   is_default: data.is_default ? 1 : 0,
  //   title: data.title,
  //   value: data.value,
  //   vendor_id: data.vendor_id,
  // }
  try {

    const res = await postRequest(ADD_PRODUCT_TAX_LIST, formData)
    return res
  } catch (error) {

  }
}

export const EditProductTaxListingApi = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  for (const key in data) {
    formData.append(key, data[key]);
  }
  // const apiData = {
  //   id: data.id,
  //   is_default: data.is_default ? 1 : 0,
  //   title: data.title,
  //   value: data.value,
  //   vendor_id: data.vendor_id,
  // }
  try {

    const res = await postRequest(ADD_PRODUCT_TAX_LIST, formData)
    return res
  } catch (error) {

  }
}

export const CreateProduct = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  for (const key in data) {
    formData.append(key, data[key]);
  }

  // const apiData = {
  //   vendor_id: data.vendor_id,
  //   title: data.title,
  //   title_arab: data.title_arab,
  //   description: data.description,
  //   description_arab: data.description_arab,
  //   rate: data.rate,
  //   category_id: data.category_id,
  //   subcategory_id: data.subcategory_id,
  //   favorites: data.favorites,
  //   price: data.price,
  //   discount_percentage: data.discount_percentage,
  //   currency: data.currency,
  //   in_stock: data.in_stock,
  //   apiToken: data.apiToken
  // }
  try {
    const res = await postRequest(CREATE_PRODUCT, formData)
    return res
  } catch (error) {

  }
}

export const ProductCategory = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const res = await postRequest(PRODUCT_CATEGORY, formData)
    return res
  } catch (error) {

  }
}
export const ProductSubCategory = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  for (const key in data) {
    formData.append(key, data[key]);
  }
  try {
    const res = await postRequest(PRODUCT_SUBCATEGORY, formData)
    return res
  } catch (error) {

  }
}
export const DeleteProductTaxes = async (data: any) => {
  const formData = new FormData()

  const user = getLocalStorage("userData")
  const token = localStorage.getItem("token")

  formData.append("vendor_id", user.userRetailer.id)
  formData.append("apiToken", token + '')
  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const res = await postRequest(DELETE_PRODUCT_TAX, formData)
    return res
  } catch (error) {

  }
}