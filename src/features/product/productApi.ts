import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../type/type";

export const getProductsApi = createAsyncThunk(
    'get products',
    async () => {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products')
        return data
    }
)

export const getProductByIdApi = createAsyncThunk(
    'get product by id',
    async (id: number) => {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products/'+id)
        return data
    }
)

export const searchProductsByTitleApi = createAsyncThunk(
    'search product by title',
    async (text: string) => {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products/?title='+text)
        return data
    }
)
export const getProductsByCategoryApi = createAsyncThunk(
    'get products by caitegor',
    async (id: number) => {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId='+id)
        return data
    }
)

export const createProductApi = createAsyncThunk(
    'create product',
    async (obj: IProduct) => {
        const {data} = await axios.post('https://api.escuelajs.co/api/v1/products/',obj)
        return data
    }
)


export const updateProductApi = createAsyncThunk(
    'update product',
    async ({id, obj}:{id:number, obj: IProduct}) => {
        const {data} = await axios.put('https://api.escuelajs.co/api/v1/products/'+id,obj)
        return data
    }
)

export const deleteProductByIdApi = createAsyncThunk(
    'delete product by id',
    async (id:number) => {
        const {data} = await axios.delete('https://api.escuelajs.co/api/v1/products/'+id)
        return data
    }
)

