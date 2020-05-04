import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';


export default function Home (){

  const data = [
    {
      code:'Nasdaq',
      market:'Nasdaq',
      company: [
        'abc',
        'bcd',
        'cdb'
      ]
    },
    {
      code:'Japan',
      market:'Japan',
      company: [
        'abc',
        'bcd',
        'cdb'
      ]
    }
  ]
  const makeCard = (datas)=>(
    datas.map((data)=>(
      <Link to={{
        pathname:`markets/${data.market}`
      }} key={data.market}>
        <Card className='m-3'>
          <Card.Header>{data.market}</Card.Header>
          <ListGroup variant="flush">
            {makeCardList(data.company)}
          </ListGroup>
        </Card>
      </Link>
      
    ))
  )

  const makeCardList = (companys)=>(
    companys.map((company)=>(
      <ListGroup.Item key={company}>{company}</ListGroup.Item>
    ))
  )

 
  
  return (
    <div>
      <ArticleTitle title='Markets'/>
      {
        makeCard(data)
      }
    </div>
  );
}