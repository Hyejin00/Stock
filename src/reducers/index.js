import produce from 'immer';

const initalState = {
  exchange : [],
  error: null,
  loading: false
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
    case 'FETCH_EXCHANGE':
      state.exchange.push({
        code: action.payload.code,
        companies: action.payload.companies
      });
      break;
    default:
      break;
  }
},initalState);

export default reducer;