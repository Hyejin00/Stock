import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleTitle from '../components/ArticleTitle';
import StockPrice from '../components/StockPrice';
import CandleChart from '../components/CandleChart';
import CompanyNews from '../components/CompanyNews';
import Spinner from 'react-bootstrap/Spinner';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { fetchCompanyInfo } from '../actions';
import ErrorMessage from '../components/ErrorMessage';

export default function StockQuote(props){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const symbol= params.get('symbol');
  const company= params.get('desc');
  const error = useSelector(state => state.error);
  
  useEffect(()=>{
    dispatch(fetchCompanyInfo(symbol));
    // eslint-disable-next-line
  },[]);
  
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
  
  return(
    <div>
      <ArticleTitle title={company}/>
      <StockPrice symbol={symbol}/>
      <Tabs defaultActiveKey="Chart" onSelect={(key)=>{
        console.log(key);
      }}>
        <Tab eventKey="News" title="News">
          <CompanyNews />
        </Tab>
        <Tab eventKey="Chart" title="Chart">
          <CandleChart />
        </Tab>
      </Tabs>
    </div>
  );
}