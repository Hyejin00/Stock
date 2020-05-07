import React from 'react';
import Table from 'react-bootstrap/Table';

export default function PriceTable({price}){
  return(
    <Table borderless>
      <tbody>
        <tr>
          <th>전일</th>
          <td>{price.pc}</td>
          <th>고가</th>
          <td>{price.h}</td>
        </tr>
        <tr>
          <th>시가</th>
          <td>{price.o}</td>
          <th>저가</th>
          <td>{price.l}</td>
        </tr>
      </tbody>
    </Table>
  );
}
