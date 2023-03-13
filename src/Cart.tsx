import React from 'react';
import { CartItemType } from './types';
import './Cart.css';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  emptyCart:()=> void;
}
type State = {}

class Cart extends React.Component<Props, State> {

  render() {
    const { cartItems, addToCart, removeFromCart, emptyCart } = this.props;
    
    const calculateTotal = (items:CartItemType[])=>
      items.reduce((acc:number,item)=>acc+item.amount*item.price,0);

    return (
      <div className='cart_menu'>
        <div className='row mb-4'>
          <h4 className='col-sm-8 text-danger'>Your Shopping Cart</h4>
          {cartItems.length !==0?
            <button type='button' className='col-sm-4 btn btn-sm btn-danger' onClick={()=>emptyCart()}>Empty Cart</button>
            :null
          }
        </div>
        {cartItems.length === 0 ? 
        <div>
          <p className='fw-bold'>No Item in the Cart!</p>
        </div>
        :
        <div>
          {cartItems.map((item) => (
            <div className='mt-3'>
              <div className='d-flex' key={item.id}>
                <h5>{item.title} </h5>
                <p>({item.amount})</p>
                {/* <p>Price: Tk{item.price}</p> */}
              </div>
              <button className='btn btn-sm btn-outline-danger' onClick={() => removeFromCart(item.id)}>Remove from cart</button>
            </div>
          ))}
          <h2 className='mt-3'>Total: Tk{calculateTotal(cartItems).toFixed(2)}</h2>
        </div>}
      </div>
    );
  }
}

export default Cart;
