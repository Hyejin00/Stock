import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/stock/symbol';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

export function fetchCompanyList(init){
  return {
    type:'FETCH_EXCHANGES',
    payload: init
  }
}

// const getCompanies = async(code)=>{
//   return await axios.get(API_URL,{
//     params:{
//       token:API_KEY,
//       exchange: code
//     }
//   });
// }

// export function fetchCompanyList(){
//   return async (dispatch)=>{
//     const exchangeslist = [
//       {code: 'KS', name:'KOSPI'},
//       {code: 'KQ', name:'KOSDAQ'},
//       {code: 'US', name:'US'},
//       {code: 'T', name:'Japan'},
//       {code: 'SS', name:'China'}
//     ];
//     const init_exchange = await Promise.all(
//       exchangeslist.map(async (exchange)=>{
//         return {
//           code: exchange.code,
//           market: exchange.name,
//           companies: (await getCompanies(exchange.code)).data
//         }
//       })
//     );
    
//     dispatch({
//       type:'FETCH_EXCHANGES',
//       payload:init_exchange
//     });
//   }
//}