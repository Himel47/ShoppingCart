import React,{Component} from 'react';
import './App.css';
import { CartItemType } from './types';
import Cart from './Cart';

interface Props{}

interface State{
  items:CartItemType[];
  cartItems:CartItemType[];
}

class App extends Component<{},State>{
  
  state:State={
    items:[],
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
    const{items,cartItems}=this.state;
    

    return(
      <div className='root'>
        <Cart cartItems = {cartItems} addToCart={this.handleAddToCart}
        removeFromCart={this.handleRemoveFromCart}/>
        <h2>Products</h2>
        {AllItems.map((item)=>(
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={()=>this.handleAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
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
