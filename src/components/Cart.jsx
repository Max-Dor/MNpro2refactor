import { useContext } from 'react';
import { ShopContext } from '../context';


export function Cart(){
    const {order, handleBasketShow } = useContext(ShopContext);
    const quantity = order.length
    return <div className='cart blue darken-4  white-text' onClick={handleBasketShow} >
        <i className="material-icons">local_grocery_store</i>
        { quantity ? <span className='cart-quontuty'>{quantity}</span> : null}
    </div>
}