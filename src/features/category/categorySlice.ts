import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../type/type";
import { createCategoryApi, getCategoriesApi, getCategoryByIdApi, updateCategoryApi } from "./categoryApi";
import { RootState } from "../../app/store";

interface IState {
    categories: ICategory[],
    category: ICategory
}

const initialState: IState = {
    categories: [],
    category: {} as ICategory
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesApi.fulfilled, (state, action) => {
            state.categories = action.payload
        }).addCase(getCategoryByIdApi.fulfilled, (state, action) => {
            state.category = action.payload
        }).addCase(createCategoryApi.fulfilled, (state, action) => {
            state.category = action.payload
        }).addCase(updateCategoryApi.fulfilled, (state, action) => {
            state.category = action.payload
        })
    }
})

export default categorySlice.reducer
export const selectCategory = (state: RootState) => state.category; 