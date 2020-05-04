import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import StockPrice from '../components/StockPrice';

export default function StockQuote(props){
  console.log(props);
  
  const data = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
  }
  
  return(
    <div>
      <ArticleTitle title={props.match.params.company}/>
      <StockPrice price={data}/>
    </div>
  );
}