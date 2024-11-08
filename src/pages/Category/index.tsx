import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCategory } from "../../features/category/categorySlice";
import { Link, useParams } from "react-router-dom";
import { getCategoryByIdApi } from "../../features/category/categoryApi";
import { selectProduct } from "../../features/product/productSlice";
import { getProductsByCategoryApi } from "../../features/product/productApi";
import { Table } from "react-bootstrap";

export const Category: React.FC = React.memo((): JSX.Element => {
    const { category } = useAppSelector(selectCategory);
    const { products } = useAppSelector(selectProduct);
    console.log(category, products);

    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) {
            dispatch(getCategoryByIdApi(+id))
            dispatch(getProductsByCategoryApi(+id))
        }
    }, [id])

    return (
        <div>
            {
                category ?
                    <>
                        <h3>{category.name}</h3>
                        <img src={category.image} width={200} />
                    </>
                    :
                    <p>Category not found</p>
            }
            <br />
            {
                products.length ?
                    <Table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>see</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(elm => (
                                    <tr key={elm.id}>
                                        <td>{elm.title}</td>
                                        <td><img src={elm.images[0]} width={100}></img></td>
                                        <td>{elm.price}</td>
                                        <td><Link to={'/product/'+elm.id}>See</Link></td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </Table>
                    :
                    <>product list </>
            }

        </div>
    )
})