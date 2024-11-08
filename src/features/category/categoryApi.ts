import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory } from "../../type/type";

export const getCategoriesApi = createAsyncThunk(
    'get categories',
    async () =>{
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
        return data
    }
)

export const getCategoryByIdApi = createAsyncThunk(
    'get categoriy by id',
    async (id: number) =>{
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories/'+id)
        return data
    }
)

export const createCategoryApi = createAsyncThunk(
    'create categori',
    async (obj: ICategory) =>{
        const {data} = await axios.post('https://api.escuelajs.co/api/v1/categories/', obj)
        return data
    }
)

export const updateCategoryApi = createAsyncThunk(
    'update categori',
    async ({id, obj}:{id:number, obj: ICategory}) =>{
        const {data} = await axios.put('https://api.escuelajs.co/api/v1/categories/'+id, obj)
        return data
    }
)

export const deleteCategoryByIdApi = createAsyncThunk(
    'delete categoriy by id',
    async (id: number) =>{
        const {data} = await axios.delete('https://api.escuelajs.co/api/v1/categories/'+id)
        return data
    }
)
