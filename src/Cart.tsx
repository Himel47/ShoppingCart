import React from 'react';
import { CartItemType } from './types';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}
type State = {}

class Cart extends React.Component<Props, State> {

  render() {
    const { cartItems, addToCart, removeFromCart } = this.props;
    
    const calculateTotal = (items:CartItemType[])=>
      items.reduce((acc:number,item)=>acc+item.amount*item.price,0);

    return (
      <div>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: Tk{item.price}</p>
            <p>Amount: {item.amount}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
          </div>
        ))}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </div>
    );
  }
}

export default Cart;
