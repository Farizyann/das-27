import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCategory } from "../../features/category/categorySlice";
import { getProductsApi } from "../../features/product/productApi";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCategoryByIdApi, getCategoriesApi } from "../../features/category/categoryApi";

export const Categories: React.FC = React.memo((): JSX.Element => {
    const { categories } = useAppSelector(selectCategory);

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCategoriesApi())
    }, [])

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image</th>
                        <th>see</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(elm => {
                            return (
                                <tr key={elm.id}>
                                    <td>{elm.name}</td>
                                    <td><img src={elm.image} width={100}></img></td>
                                    <td><Link to={'/category/' + elm.id}>see </Link></td>
                                    <td><Button onClick={() => dispatch(deleteCategoryByIdApi(elm.id)).unwrap()
                                        .then(res => {
                                            console.log(res);
                                            dispatch(getCategoriesApi())
                                        }
                                        )}>&times;</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div >
    )
})