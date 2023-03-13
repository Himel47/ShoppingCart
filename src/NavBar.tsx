import React,{Component} from 'react';
import './App.css';
import Cart from './Cart';

class Navbar extends Component<{},{}>{

  render(){

    return(
      <div className='container col-lg-7 offset-2 mt-4 mb-3'>
        <h1 className='fw-bold text-warning'>Shoping Cart</h1>
      </div>
    );
  }
}

export default Navbar;

