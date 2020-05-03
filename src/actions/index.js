import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

// export function fetchExchange(){
//   return async (dispatch) =>{
//     dispatch({type: 'START_LOADING'});
//     axios.get(API_URL+'stock/exchange',{
//         params:{
//           token:API_KEY
//         }
//     }).then(({data})=>{
//       dispatch({
//         type:'FETCH_EXCHANGE',
//         payload: {
//           exchanges : data
//         }});
//     }).catch((err)=>{
//       dispatch({
//         type:'ERROR',
//         payload: {
//           code:err.response.status,
//           text:err.response.statusText
//         }
//       });
//     }).then(()=>{
//       dispatch({type:'END_LOADING'}); 
//     });
//   }
// }