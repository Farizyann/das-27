import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../type/type";
import { createProductApi, getProductByIdApi, getProductsApi, getProductsByCategoryApi, searchProductsByTitleApi, updateProductApi } from "./productApi";
import { RootState } from "../../app/store";

interface IState {
    products: IProduct[]
    product: IProduct
}

const initialState: IState = {
    products: [],
    product: {} as IProduct
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProductsApi.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(getProductByIdApi.fulfilled, (state, action) => {
            state.product = action.payload
        }).addCase(updateProductApi.fulfilled, (state,action)=> {
            state.product = action.payload
        }).addCase(createProductApi.fulfilled, (state,action) => {
            state.product = action.payload
        }).addCase(searchProductsByTitleApi.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(getProductsByCategoryApi.fulfilled, (state, action)=> {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer
export const selectProduct = (state:RootState) => state.product