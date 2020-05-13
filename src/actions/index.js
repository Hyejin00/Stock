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

const getPrice = async(symbol)=>{
  return await axios.get(API_URL+'quote',{
    params:{
      token:API_KEY,
      symbol:symbol
    }
  })
}
const getCompanyNews = async(symbol)=>{
  return await axios.get(API_URL+'company-news',{
    params:{
      token:API_KEY,
      symbol:symbol,
      from:'2019-01-01',
      to:'2020-05-13'
    }
  })
}
const getGeneralNews = async()=>{
  return await axios.get(API_URL+'news',{
    params:{
      token:API_KEY,
      category:'general'
    }
  })
}
const getCandle = async(symbol)=>{
  return await axios.get(API_URL+'stock/candle',{
    params:{
      token:API_KEY,
      symbol:symbol,
      resolution:'D',
      from:'1572651390',
      to:'1575243390'
    }
  })
}
export function fetchCompanyInfo(symbol){
  return (dispatch)=>{
    dispatch({type:'START_LOADING'});
    Promise.all(
      [getPrice(symbol),getCompanyNews(symbol),getCandle(symbol)]
    ).then((res)=>{
      console.log(res);
      dispatch({type:'FETCH_PRICE', payload:res[0].data});
      dispatch({type:'FETCH_COMPANYNEWS', payload:res[1].data});
      dispatch({type:'FETCH_CANDLE', payload:res[2].data});
      dispatch({type:'END_LOADING'});
    })
  }
}

export function fetchInitData(){
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
      dispatch({
        type:'FETCH_EXCHANGES',
        payload: res
      });
      getGeneralNews().then(((res)=>{
        dispatch({
          type:'FETCH_GENNEWS',
          payload:res.data
        });
        dispatch({
          type:'END_LOADING'
        });
      }))
    });
  }
}