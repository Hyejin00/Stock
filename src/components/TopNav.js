import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function TopNav(){
  const [symbol, setSymbol] = useState('');
  let history = useHistory();
  function redireactUrl(){
    history.push(`/companies?symbol=${symbol}&desc=${symbol}`);
  }
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#/">Stock</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="write Symbol.." className="mr-sm-2" onChange = {
            (e)=>{
              setSymbol(e.target.value);
            }
          }
          onKeyDown ={
            (e)=>{
              if(e.keyCode ===13){
                e.preventDefault();
                setSymbol('');
                redireactUrl();
              }
            }
          }
          />
          <Button variant="outline-info" onClick={
            ()=>{
              setSymbol('');
              redireactUrl();
            }
          }>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

