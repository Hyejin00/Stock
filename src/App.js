import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import TopNav from './components/TopNav';
import Detail from './routes/Detail';
import News from './routes/News';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <TopNav />
        <div className='context'>
          <Route path='/' exact={true} component={Home}/> {/* welcome page */}
          <Route path = '/stock' component={Detail}/>
          <Route path = '/news' component={News}/>
        </div>
    </HashRouter>
  );
}

export default App;
