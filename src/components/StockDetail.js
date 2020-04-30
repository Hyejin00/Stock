import React from 'react';
import SD_Owner from './SD_Owner';
import SD_Executive from './SD_Executive';
import SD_News from './SD_News';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function StockDetail(){
  const data ={
    "description": "AGILENT TECHNOLOGIES INC",
    "displaySymbol": "A",
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
  }
  return(
    <div>
      <Card>
        <Card.Header>{data.description} ({data.displaySymbol})</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>현재가: {data.c}</ListGroup.Item>
          <ListGroup.Item>최고가: {data.h}</ListGroup.Item>
          <ListGroup.Item>최저가: {data.l}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Tabs defaultActiveKey="owner">
        <Tab eventKey="owner" title="소유권">
          <SD_Owner />
        </Tab>
        <Tab eventKey="profile" title="회사임원">
          <SD_Executive />
        </Tab>
        <Tab eventKey="news" title="회사뉴스">
          <SD_News />
        </Tab>
      </Tabs>
    </div>
  );
}