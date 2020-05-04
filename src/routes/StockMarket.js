import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

export default function StockMarket(props){
  //만약 selected 있으면 -> store
  //없으면 -> 직접 패치
  const data = [
    {
      "symbol": "A",
      "description": "AGILENT TECHNOLOGIES INC",
      "c": 261.74,
    },
    {
      "symbol": "AA",
      "description": "ALCOA CORP",
      "c": 261.74,
    },
    {
      "symbol": "AAAU",
      "description": "PERTH MINT PHYSICAL GOLD ETF",
      "c": 261.74,
    }
  ];
  
  return (
    <div>
      <ArticleTitle title={props.match.params.exchange}/>
      <Table bordered hover>
        <thead>
          <tr>
            <th>company</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((company)=>(
              <tr key={company.symbol}>
                <td><Link to={{
                  pathname:`markets/${props.match.params.exchange}`,
                  search: `?symbol=${company.symbol}`
                } }>{company.description}</Link></td>
                <td>{company.c}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
    //pagenation 생각하기
  );
}