import { createSlice } from '@reduxjs/toolkit'

interface state {
  productList: Array<Object>,
  productTaxList: Array<Object>,
}

const initialState: state = {
  productList: [],
  productTaxList: []
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    AddProductList: (state, action) => {
      state.productList.push(action.payload.data)
    },
    AddProductTaxList: (state, action) => {
      state.productTaxList = action.payload.data
    },

  },
})

export const { AddProductList } = ProductSlice.actions;
export default ProductSlice.reducer