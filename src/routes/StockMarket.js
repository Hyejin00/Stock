import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import ArticleSubTitle from '../components/ArticleSubTitle';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import {Link} from 'react-router-dom';

export default function StockMarket({match}){
  const loading = useSelector(state => state.loading);
  const idx = match.params.exchange;
  const exchanges = useSelector(state => state.exchanges[idx]);
  // const error = useSelector(state => state.error);
  
  if(loading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  return (
    <div>
      <ArticleTitle title={exchanges.market}/>
      <ArticleSubTitle title='Company list'/>
      <ListGroup>
        {
          exchanges.companies.map((company,idx)=>{
            return (
              <Link
                to={{
                  pathname:`/companies?symbol=${company.symbol}&desc=${company.description}`
                }}
                key = {idx}
              >
                <ListGroup.Item>
                  {company.description} ({company.displaySymbol})
                </ListGroup.Item>
              </Link>
              )
          })
        }
      </ListGroup>
    </div>
    //pagenation 생각하기
  );
  
}