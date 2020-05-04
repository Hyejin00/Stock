import React from 'react';
import Table from 'react-bootstrap/Table';

export default function PriceTable(){
  return(
    <Table borderless>
      <tbody>
        <tr>
          <th>전일</th>
          <td>Mark</td>
          <th>고가</th>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>시가</th>
          <td>Jacob</td>
          <th>종가</th>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}
