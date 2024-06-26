import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemCount, selectCartTotalPrice } from '../redux/cartSlice';
import { Container, Navbar, Badge } from 'react-bootstrap';

const Header = () => {
    const itemCount = useSelector(selectCartItemCount);
    const totalPrice = useSelector(selectCartTotalPrice);

    return (
        <Navbar bg="primary" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand className="mx-auto text-white">
            <div className="text-center d-inline-block mr-4" style={{fontSize:"25px"}}>
              <span  className="font-weight-bold">Cart Items : </span>
              <Badge pill variant="light">
                {itemCount}
              </Badge>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="text-center d-inline-block" style={{fontSize:"25px"}}>
              <span className="font-weight-bold">Total Price : </span>
              <Badge pill variant="light">
                $ {totalPrice.toFixed(2)}
              </Badge>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default Header;
