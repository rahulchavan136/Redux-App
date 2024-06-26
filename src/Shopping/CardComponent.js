import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { Card, Button, Col } from 'react-bootstrap';
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";


const CardComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // quantity of this product in the cart
  const itemInCart = cartItems.find(item => item.id === product.id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="bg-light">
        <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'cover'}} />
        <Card.Body className="m-2">
          <Card.Title className="mb-0" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.title}</Card.Title>
          <Card.Text className="mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            Price: ${product.description}
          </Card.Text><br />
          <Card.Text>
            <h5>Price: ${product.price}</h5>
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="danger" size="lg"  onClick={handleRemoveFromCart} disabled={quantityInCart === 0}><FaMinus /></Button>
            <h3 className="d-inline-block bg-white p-3 pt-1 pb-1 mt-1 shadow-sm border rounded">{quantityInCart}</h3>
            <Button variant="success" size="lg" onClick={handleAddToCart}><IoMdAdd /></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
