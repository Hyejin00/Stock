import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MarketComponent from './MarketComponent';

export default function DomesticMarket(){
  return (
    <div>
      <Row>
        <Col>
          <MarketComponent />
        </Col>
        <Col>
          <MarketComponent />
        </Col>
      </Row>
    </div>
  );
}