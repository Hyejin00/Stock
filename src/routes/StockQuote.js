import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleTitle from '../components/ArticleTitle';
import StockPrice from '../components/StockPrice';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

export default function StockQuote(props){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const symbol= params.get('symbol');
  const company= params.get('desc');
  let [price, setPrice] = useState([]);
  
  useEffect(()=>{
    dispatch({
      type:'START_LOADING'
    });
    axios.get(API_URL+'quote',{
      params:{
        token:API_KEY,
        symbol:symbol
      }
    }).then(({data})=>{
      setPrice(data);
      dispatch({
        type:'END_LOADING'
      });
    }).catch((err)=>{
      dispatch({
        type:'ERROR',
        payload: {
          code:err.response.status,
          text:err.response.statusText
        }
      });
      dispatch({
        type:'END_LOADING'
      });
    })
  },[]);
  if(loading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  
  return(
    <div>
      <ArticleTitle title={company}/>
      <StockPrice price={price}/>
    </div>
  );
}