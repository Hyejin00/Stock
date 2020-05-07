import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceTable from './PriceTable';
import CurrentPrice from './CurrentPrice';


export default function StockPrice({price}){
  return (
    <Container>
      <Row>
        <Col className='border-right d-flex justify-content-center align-items-center'>
          <CurrentPrice price={price.c}/>
        </Col>
        <Col>
          <PriceTable price={price}/>
        </Col>
      </Row>
    </Container>
  );
}