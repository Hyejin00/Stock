import React from 'react';
import Table from 'react-bootstrap/Table';


export default function Tabowner(){
  const data ={
    "ownership": [
      {
        "name": "The Vanguard Group, Inc.",
        "share": 72213840,
        "turnover": "LOW",
        "turnoverPercent": 6.4618,
        "change": 342053,
        "filingDate": "2019-09-30"
      },
      {
        "name": "State Street Global Advisors (US)",
        "share": 53860076,
        "turnover": "LOW",
        "turnoverPercent": 6.5472,
        "change": 180902,
        "filingDate": "2019-09-30"
      },
      {
        "name": "BlackRock Institutional Trust Company, N.A.",
        "share": 43631204,
        "turnover": "LOW",
        "turnoverPercent": 12.7397,
        "change": 476945,
        "filingDate": "2019-09-30"
     }
    ], 
    "symbol": "IBM"
  }
  const fund = {"ownership": [
    {
      "name": "American Funds Growth Fund of America",
      "share": 5087926,
      "turnover": "LOW",
      "turnoverPercent": 26.9459,
      "change": 222926,
      "filingDate": "2019-12-31",
      "portfolioPercent": 1.12
    },
    {
      "name": "Vanguard Total Stock Market Index Fund",
      "share": 4061017,
      "turnover": "LOW",
      "turnoverPercent": 5.7676,
      "change": 284677,
      "filingDate": "2019-12-31",
      "portfolioPercent": 0.19
    },
    {
      "name": "American Funds New Perspective Fund",
      "share": 3377612,
      "turnover": "LOW",
      "turnoverPercent": 22.7191,
      "change": 145612,
      "filingDate": "2019-12-31",
      "portfolioPercent": 1.52
    }
  ], 
  "symbol": "TSLA"
}
  return(
    <div>
      <h4>투자자</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>일자</th>
            <th>이름</th>
            <th>주식수</th>
            <th>회전율</th>
            <th>변동성</th>
          </tr>
        </thead>
        <tbody>
          {
            data.ownership.map((own,idx)=>(
              <tr key={idx}>
                <td>{own.filingDate}</td>
                <td>{own.name}</td>
                <td>{own.share}</td>
                <td>{own.turnoverPercent}</td>
                <td>{own.change}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <h4>채권</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>일자</th>
            <th>이름</th>
            <th>주식수</th>
            <th>회전율</th>
            <th>변동성</th>
            <th>유가증권</th>
          </tr>
        </thead>
        <tbody>
          {
            fund.ownership.map((own,idx)=>(
              <tr key={idx}>
                <td>{own.filingDate}</td>
                <td>{own.name}</td>
                <td>{own.share}</td>
                <td>{own.turnoverPercent}</td>
                <td>{own.change}</td>
                <td>{own.portfolioPercent}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}