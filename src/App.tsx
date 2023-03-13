import React,{Component} from 'react';
import './App.css';
import { CartItemType } from './types';
import Cart from './Cart';

interface Props{}

interface State{
  //items:CartItemType[];
  cartItems:CartItemType[];
}

class App extends Component<{},State>{
  
  state:State={
    //items:[],
    cartItems:[]
  }

  handleAddToCart = (clickedItem: CartItemType) => {
    this.setState((prevState) => {
      // Check if item is already in cart
      const isItemInCart = prevState.cartItems.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      }
      // Item is not in cart, add it
      return {
        cartItems: [...prevState.cartItems, { ...clickedItem, amount: 1 }],
      };
    });
  };

  handleRemoveFromCart = (id: number) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]),
    }));
  };

  handleEmptyCart = ()=>{
    this.setState({
      //items:[],
      cartItems:[],
    });
  }

  render(){
    const AllItems=[
      {
        id:1,
        title: "Pother Pachali",
        price:350.0,
        amount:0,
      },
      {
        id:2,
        title: "Hacker",
        price:50.0,
        amount:0,
      },
      {
        id:3,
        title: "Hypersonic Rohosyo",
        price:150.0,
        amount:0,
      },
      {
        id:4,
        title: "Aam Aatir vepu",
        price:150.0,
        amount:0,
      },
      {
        id:5,
        title: "Gitanjali",
        price:350.0,
        amount:0,
      },
    ];
    const{cartItems}=this.state;
    

    return(
      <div className='root container col-lg-8 offset-2'>
        <h2>Products</h2>
        <div className='d-flex row g-5'>
          <div className='col-6'>
            <div className='row g-3'>
              {AllItems.map((item)=>(
                <div className='col-6 border border-primary rounded g-3 p-3 customCart' key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Price: <b>{item.price}</b> Taka</p>
                  <button className='btn btn-sm btn-outline-primary' onClick={()=>this.handleAddToCart(item)}>Add To Cart</button>
                </div>
              ))}
            </div>
          </div>
          <div className='col-5 offset-1'>
            <Cart cartItems = {cartItems} addToCart={this.handleAddToCart}
            removeFromCart={this.handleRemoveFromCart} emptyCart={this.handleEmptyCart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
