import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import NewsList from './routes/NewsList';
import Home from './routes/Home';
import StockMarket from './routes/StockMarket';
import StockQuote from './routes/StockQuote';
import Container from 'react-bootstrap/Container';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import { fetchCompanyList } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchCompanyList());

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <TopNav />
        <Container fluid className = 'p-3'>
          <Route path = '/markets/:exchange' component={StockMarket}/>
          <Route path='/' exact={true} component={Home}/>
          <Route path = '/companies/:company' component={StockQuote}/>
          <Route path = '/news' component={NewsList}/>
        </Container>
      </HashRouter>
    </Provider>
  );
}

export default App;
