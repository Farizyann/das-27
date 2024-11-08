import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { deleteProductByIdApi, getProductsApi, getProductsByCategoryApi } from "../../features/product/productApi";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, Button } from "react-bootstrap";
import { selectCategory } from "../../features/category/categorySlice";
import { Link } from "react-router-dom";
import { getCategoriesApi } from "../../features/category/categoryApi";

export const Products: React.FC = React.memo((): JSX.Element => {
    const { products } = useAppSelector(selectProduct);
    const { categories } = useAppSelector(selectCategory);
    console.log(products);

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProductsApi())
        dispatch(getCategoriesApi())
    }, [])

    return (
        <div>
            <Form.Select onChange={e=>dispatch(getProductsByCategoryApi(+e.target.value))} aria-label="Default select example">
                {categories.map(elm => {
                    return (
                        <option key={elm.id} value={elm.id}>{elm.name}</option>
                    )
                })}
            </Form.Select>

            {products.map(elm => {
                return (
                    <Card key={elm.id} style={{ width: '23rem', display: "inline-block" }}>
                        <Card.Img variant="top" src={elm.images[0]} width={200} />
                        <Card.Body>
                            <Card.Title>{elm.title}</Card.Title>
                            <Card.Text>
                                {elm.category.name}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{elm.price}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Link to={'/product/' + elm.id}> See More</Link>
                            <Button onClick={() => dispatch(deleteProductByIdApi(elm.id)).unwrap().then(res => {
                                console.log(res);
                                dispatch(getProductsApi())

                            })}>&times;</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
})