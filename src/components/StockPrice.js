import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceTable from './PriceTable';
import CurrentPrice from './CurrentPrice';


export default function StockPrice(){
  const price = useSelector(state => state.selected_price);
  if(!price){
    return <div>데이터를 불러오지 못했습니다..</div>
  }
  
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