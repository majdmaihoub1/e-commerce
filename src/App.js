import './App.css';
import HomePage from './Pages/homepage/hompage.component';
import { Switch, Route } from 'react-router-dom';
import shopPage from './Pages/shop/shop.component';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
