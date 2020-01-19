import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProductList from './app/components/ProductList';
import Cart from './app/components/Cart';
import AddToList from './app/components/AddToList';



class App extends Component {
  render() {
    return (
      <div >
        <div>
          <h3 align="center">Online Shopping</h3>
        </div>
        <BrowserRouter>
          <div className="align-baseline">
          <div>
                    <ul className="nav nav-pills justify-content-center" >
                       
                         <li className="nav-item">
                         <button className="btn btn-outline-primary"><Link className="text-dark" to="/productlist"><b> Products </b></Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary"><Link className="text-dark" to="/addtolist"><b>Add New Products </b></Link></button>
                       </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary"><Link className="text-dark" to="/cart"><b> Wish List </b></Link></button>
                        </li>
                    </ul>
                </div>
            
            <Switch>
              <Route path="/productlist" component={ProductList} />
              <Route path="/cart" component={Cart} />
              <Route path="/addtolist" component={AddToList} />
              {/* <Route path="/" component={ProductList} exact /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
