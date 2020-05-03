import produce from 'immer';

const initalState = {
  selected_exchange: null,
  selected_symbol:null,
  // loading: false,
  // error:null ,
  // exchange:[]
}

const reducer = produce((state, action)=>{
  switch(action.type){
    // case 'START_LOADING':
    //   state.loading = true;
    //   break;
    // case 'CLEAR_ERROR':
    //   state.error = null;
    //   break;
    // case 'ERROR':
    //   state.loading = false;
    //   state.error = action.payload;
    //   break;
    // case 'END_LOADING':
    //   state.loading = false;
    //   break;
    // case 'FETCH_EXCHANGE':
    //   state.exchange = action.payload.exchanges;
    //   state.loading = false;
    //   break;
    default:
      break;
  }
},initalState);

export default reducer;