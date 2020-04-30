import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function StockList(){
  const company_name = [
    {
      "description": "AGILENT TECHNOLOGIES INC123456756756756756",
      "displaySymbol": "A",
      "symbol": "A"
    },
    {
      "description": "ALCOA CORP",
      "displaySymbol": "AA",
      "symbol": "AA"
    }
  ];
  return(
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        회사 선택
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          company_name.map((name)=>
          <Dropdown.Item key={name.symbol}>{name.description}</Dropdown.Item>)
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}