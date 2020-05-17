import React,{useState} from 'react';
import ArticleTitle from '../components/ArticleTitle';
import ArticleSubTitle from '../components/ArticleSubTitle';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ErrorMessage from '../components/ErrorMessage';

export default function StockMarket({match}){
  const loading = useSelector(state => state.loading);
  const idx = match.params.exchange;
  const exchanges = useSelector(state => state.exchanges[idx]);
  const [current_page, setCurrentPage] = useState(1);
  const [offset] = useState(10);
  const [term, setTerm] = useState(1);
  const startPage = (current_page-1)*offset;
  const error = useSelector(state => state.error);

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
  return (
    <div>
      <ArticleTitle title={exchanges.market}/>
      <ArticleSubTitle title='Company list'/>
      <ListGroup>
        {
          exchanges.companies.slice(startPage,startPage+offset).map((company,index)=>{
            if(company.description === 'N/A'){
              return null;
            }
            return (
              <Link
                to={{
                  pathname:`/companies?symbol=${company.symbol}&desc=${company.description}`
                }}
                key = {index}
              >
                <ListGroup.Item>
                  {company.description} ({company.displaySymbol})
                </ListGroup.Item>
              </Link>
              )
          })
        }
      </ListGroup>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <InputGroup>
              <InputGroup.Prepend>
                <Button 
                  variant="outline-primary"
                  onClick={
                    ()=>{
                      setCurrentPage((cur)=>{
                        if(cur>1){
                          setTerm(cur-1);
                          return cur-1;
                        }else{
                          setTerm(1);
                          return 1;
                        }
                      });
                      }
                }> pre </Button>
              </InputGroup.Prepend>
              <FormControl aria-label="currentpage" style={{width:'3.5rem'}} className='Form_page'
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              onKeyDown ={
                (e)=>{
                  if(e.keyCode ===13){
                    e.preventDefault();
                    setCurrentPage(parseInt(term));
                  }
                }
              }
              />
              <InputGroup.Append>
                <InputGroup.Text>{Math.ceil(exchanges.companies.length/offset)}</InputGroup.Text>
                <Button variant="outline-primary" 
                  onClick={
                    ()=>{
                      const max_page = Math.ceil(exchanges.companies.length/offset);
                      setCurrentPage((cur)=>{
                        if(cur<max_page){
                          setTerm(cur+1);
                          return cur+1
                        }else{
                          setTerm(max_page);
                          return max_page
                        }
                      });
                      }
                    }
                  > next </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}