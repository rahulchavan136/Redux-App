// BookContainer.js

import React, { useState } from 'react';
import { Button, Container, Form, Card, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, purchaseBook, sellBook } from './BookAction';

const BookContainer = () => {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const books = useSelector(state => state.books);

    const dispatch = useDispatch();
    
    const [bookName, setBookName] = useState('');
    const [price, setPrice] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleAddBook = () => {
        if (bookName.trim() !== '' && price !== '' && authorName !== '') {
            dispatch(addBook(bookName, price, authorName));
            setBookName('');
            setPrice('');
            setAuthorName('');
        }
    };

    return (
        <Container>
            <div className='mt-5'>
                <p><strong>Number Of Books: {numberOfBooks}</strong></p>
                <Button variant='success' onClick={() => dispatch(purchaseBook())}>Buy Book</Button>&nbsp;
                <Button variant='danger' onClick={() => dispatch(sellBook())}>Sell Book</Button>
            </div>
            <div><br />
                <p><strong>List Of Books Name</strong></p>
                <Row>
                    <Col xs={4}>
                        <Form.Control
                            type="text"
                            placeholder="Enter book name"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </Col>
                    <Col xs={4}>
                        <Form.Control
                            type="text"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                    <Col xs={4}>

                        <Form.Control
                            type="text"
                            placeholder="Enter author name"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                        />
                    </Col>
                </Row><br />
                <Button variant='primary' onClick={handleAddBook}>Add Book</Button>&nbsp;
                <div className="mt-4">
                    <h4>Books List</h4>
                    {

                    }
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Author Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.price}</td>
                                    <td>{book.authorName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* <div className="row">
                        {books.map((book, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{book.bookName}</Card.Title>
                                        <Card.Text>
                                            <strong>Price Rs:</strong> {book.price}<br />
                                            <strong>Author Name:</strong> {book.authorName}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </Container>
    );
};

export default BookContainer;
