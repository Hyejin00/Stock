import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

export function fetchExchange(code){
  return (dispatch)=>{
    dispatch({type: 'CLEAR_ERROR'});
    axios.get(API_URL+'stock/symbol',{
      params:{
        token: API_KEY,
        exchange: code
      }
    }).then(({data})=>{
      console.log(code);
      dispatch({
        type:'FETCH_EXCHANGE',
        payload:{
          code:code,
          companies:data
        }
      });
    }).catch((err)=>{
      dispatch({
        type:'ERROR',
        payload: {
          code:err.response.status,
          text:err.response.statusText
        }
      });
    })
  }
}