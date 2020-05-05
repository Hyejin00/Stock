import React, {useEffect}from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import DomesticMarket from '../components/DomesticMarket';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchange } from '../actions/index';


export default function Home (){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const exchange = useSelector(state => state.exchange);

  useEffect(()=>{
    const initEx = ['KS','KQ','US','T','SS'];
    dispatch({type:'START_LOADING'});
    initEx.forEach((code)=>{
      dispatch(fetchExchange(code));
    });
    dispatch({type:'END_LOADING'});
  },[]);

  console.log(exchange);
  
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
      <DomesticMarket />
      {
        makeCard(data)
      }
    </div>
  );
}