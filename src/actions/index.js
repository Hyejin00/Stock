import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

//예외처리

const getCompanies = async(code)=>{
  return await axios.get(API_URL+'stock/symbol',{
    params:{
      token:API_KEY,
      exchange: code
    }
  });
}

export function fetchCompanyList(){
  return (dispatch)=>{
    dispatch({
      type:'START_LOADING'
    });
    const exchangeslist = [
      {code: 'KS', name:'KOSPI'},
      {code: 'KQ', name:'KOSDAQ'},
      {code: 'US', name:'US'},
      {code: 'T', name:'Japan'},
      {code: 'SS', name:'China'}
    ];
    Promise.all(
      exchangeslist.map(async (exchange)=>{
        return {
          code: exchange.code,
          market: exchange.name,
          companies: (await getCompanies(exchange.code)).data
        }
      })
    ).then((res)=>{
      console.log(res);
      
      dispatch({
        type:'FETCH_EXCHANGES',
        payload: res
      });
      dispatch({
        type:'END_LOADING'
      });
    });
  }
}