import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';


export default function Home (){
  const loading = useSelector(state => state.loading);
  const exchanges = useSelector(state => state.exchanges);
  const error = useSelector(state => state.error);

  exchanges.then((res)=>{
    console.log(res);
    
  });

  if(error){
    return <ErrorMessage />
  }
  if(loading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  return (
    <div>
      <ArticleTitle title='Markets'/>
      {
        exchanges.map((exchange)=>(
          <Link to={
            {pathname:`markets/${exchange.code}`}
            } key={exchange.code}>
            <Card className='m-3'>
              <Card.Header>{exchange.market}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{exchange.companies[0].description}</ListGroup.Item>
                <ListGroup.Item>{exchange.companies[1].description}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Link>
        ))
      }
    </div>
  );

  
}