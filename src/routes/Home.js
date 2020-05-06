import React, {useEffect}from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyList } from '../actions/index';
import ErrorMessage from '../components/ErrorMessage';


export default function Home (){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const exchanges = useSelector(state => state.exchanges);
  const error = useSelector(state => state.error);

  useEffect(()=>{
    dispatch({type:'START_LOADING'});
    dispatch(fetchCompanyList());
    console.log('zz');
    
  },[]);

  if(exchanges){
    dispatch({type:'END_LOADING'});
  }
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