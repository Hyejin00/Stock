import produce from 'immer';

const initalState = {
  exchanges: [],
  news:[],
  loading: false,
  streaming:false,
  error:null,
  selected_price:null,
  selected_news:null,
  selected_chart:null
}

const reducer = produce((state, action)=>{
  switch(action.type){
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'CLEAR_ERROR':
      state.error = null;
      break;
    case 'ERROR':
      state.loading = false;
      state.error = action.payload;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    case 'START_STREAMING':
      state.streaming = true;
      break;
    case 'END_STREAMING':
      state.streaming = false;
      break;
    case 'FETCH_EXCHANGES':
      state.exchanges= action.payload;
      break;
    case 'FETCH_PRICE':
      state.selected_price = action.payload;
      break;
    case 'FETCH_COMPANYNEWS':
      state.selected_news = action.payload;
      break;
    case 'FETCH_GENNEWS':
      state.news = action.payload;
      break;
    case 'FETCH_CANDLE':
      state.selected_chart = action.payload;
      break;
    default:
      break;
  }
},initalState);

export default reducer;