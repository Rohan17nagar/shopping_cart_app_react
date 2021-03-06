import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Details from './components/Details';
import Home from './components/Home';
import { Nav } from './components/Nav';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav/>
      <Route path="/" exact component={Home} />
      <Route  path="/cart" exact component={Cart} />
      <Route  path="/details/:id" exact component={Details} />
      
      </Provider>
    </Router>
  );
}

export default App;
