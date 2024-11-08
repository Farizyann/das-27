import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Products } from "../pages/Products";
import { Product } from "../pages/Product";
import { Categories } from "../pages/Categories";
import { Category } from "../pages/Category";
import { AddProduct } from "../pages/AddProduct";
import { AddCategory } from "../pages/AddCategory";
import { MyError } from "../pages/MyError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Products/>
            },
            {
                path: 'product/:id',
                element: <Product/>
            },
            {
                path: 'categories',
                element: <Categories/>
            },
            {
                path: 'category/:id',
                element: <Category/>
            },
            {
                path: 'products/add',
                element: <AddProduct/>
            },
            {
                path: 'categories/add',
                element: <AddCategory/>
            },
            {
                path: '*',
                element: <MyError/>
            }
        ]
    }
])