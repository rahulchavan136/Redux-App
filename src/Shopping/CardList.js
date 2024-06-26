import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts } from '../redux/ProductsSlice';
import CardComponent from './CardComponent';
import { Container, Row } from 'react-bootstrap';

const CardList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Container>
            <Row className='mt-5'>
                {products.map(product => (
                    <CardComponent key={product.id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default CardList;
