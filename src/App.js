import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import StockViewer from'./routes/StockViewer';
import NewsList from './routes/NewsList';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <TopNav />
      <Route path='/' exact={true} component={Home}/> {/* welcome page */}
      <Route path = '/stock' component={StockViewer}/>
      <Route path = '/news' component={NewsList}/>
    </HashRouter>
  );
}

export default App;
