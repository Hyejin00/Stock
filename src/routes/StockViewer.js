import React from 'react';
import StockList from '../components/StockList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StockViewer (){
  
  return (
    <Container>
      <Row>
        <Col sm={1} md={4}><StockList /></Col>
        <Col sm={1} md={8}>
          <StockList />
          <StockList />
        </Col>
      </Row>
    </Container>  
  );
}
export default StockViewer;