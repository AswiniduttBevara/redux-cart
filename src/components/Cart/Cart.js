import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* {cartItems.map(items => (<CartItem key={items.id}
          item={{ title: items.name, quantity: items.quantity, total: items.total.price, price: items.price }}
        />))} */}
        {cartItems.map(items => <CartItem key={items.id}
           title={items.name} quantity={items.quantity} total={items.totalPrice} price={items.price}  id={items.id}
        />)}
        
      </ul>
    </Card>
  );
};

export default Cart;
