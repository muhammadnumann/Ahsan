import { postRequest } from "."
import { ADD_PRODUCT_TAX_LIST, CREATE_PRODUCT, PRODUCT_CATEGORY, PRODUCT_LIST, PRODUCT_SUBCATEGORY, PRODUCT_TAX_LIST } from "./ApiConstants"

export const ProductListingApi = async (data: any) => {
  try {
    const res = await postRequest(PRODUCT_LIST, data)
    return res
  } catch (error) {

  }
}

export const ProductTaxListingApi = async (data: any) => {
  try {
    const res = await postRequest(PRODUCT_TAX_LIST, data)
    return res
  } catch (error) {

  }
}

export const AddProductTaxListingApi = async (data: any) => {
  try {
    const apiData = {
      is_default: data.is_default ? 1 : 0,
      title: data.title,
      value: data.value,
      vendor_id: data.vendor_id,
    }
    const res = await postRequest(ADD_PRODUCT_TAX_LIST, apiData)
    return res
  } catch (error) {

  }
}

export const EditProductTaxListingApi = async (data: any) => {
  try {
    const apiData = {
      id: data.id,
      is_default: data.is_default ? 1 : 0,
      title: data.title,
      value: data.value,
      vendor_id: data.vendor_id,
    }
    const res = await postRequest(ADD_PRODUCT_TAX_LIST, apiData)
    return res
  } catch (error) {

  }
}

export const CreateProduct = async (data: any) => {
  try {
    const apiData = {
      vendor_id: data.vendor_id,
      title: data.title,
      title_arab: data.title_arab,
      description: data.description,
      description_arab: data.description_arab,
      rate: data.rate,
      category_id: data.category_id,
      subcategory_id: data.subcategory_id,
      favorites: data.favorites,
      price: data.price,
      discount_percentage: data.discount_percentage,
      currency: data.currency,
      in_stock: data.in_stock,
      apiToken: data.apiToken
    }
    const res = await postRequest(CREATE_PRODUCT, apiData)
    return res
  } catch (error) {

  }
}

export const ProductCategory = async (data: any) => {
  try {
    const res = await postRequest(PRODUCT_CATEGORY, data)
    return res
  } catch (error) {

  }
}
export const ProductSubCategory = async (data: any) => {
  try {

    const res = await postRequest(PRODUCT_SUBCATEGORY, data)
    return res
  } catch (error) {

  }
}