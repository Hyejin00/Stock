import React from 'react';
import Table from 'react-bootstrap/Table';

function Home (){
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>통화단위</th>
          <th>거래소명</th>
        </tr>
      </thead>
      <tbody>
        <tr key='code'>
          <td>1</td>
          <td>Mark</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default Home;