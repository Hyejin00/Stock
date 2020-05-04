import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import NewsList from './routes/NewsList';
import Home from './routes/Home';
import StockMarket from './routes/StockMarket';
import StockQuote from './routes/StockQuote';

function App() {
  return (
    <HashRouter>
      <TopNav />
      <Route path='/' exact={true} component={Home}/>
      <Route path = '/markets/:exchange' component={StockMarket}/>
      <Route path = '/companies/:company' component={StockQuote}/>
      <Route path = '/news' component={NewsList}/>
    </HashRouter>
  );
}

export default App;
