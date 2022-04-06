import {useContext} from 'react';
import {ShopContext} from '../context'

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const quantity = order.length;
    return (
        <div className="cart yellow accent-4" onClick={handleBasketShow}>
            <i className="material-icons">shopping_basket</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
} 

export default Cart;