import './App.css';
import './Scss/main.css';
import axios from "axios";
import Navbar from './Component/Navbar';
import Product from './Pages/Product';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Product_details from './Pages/Product_details';
import post from './Pages/post';

axios.defaults.baseURL='https://fakestoreapi.com'

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Post" component={post} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Product_details" component={Product_details} />
          <Redirect to="/Product" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
