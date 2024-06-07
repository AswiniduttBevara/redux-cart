import classes from './CartItem.module.css';
import { cartSliceActions } from '../../store/cart-Slice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {

  const { title, quantity, total, price, id } = props;

  const dispatch = useDispatch();

  const removeItemsFromCartHandler = () => {
    dispatch(cartSliceActions.removeItemsFromCart(id));
  };
  
  const addItemsToCartHandler = () => {
    dispatch(cartSliceActions.addItemsToCart({id:id, price:price, name:title}));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemsFromCartHandler}>-</button>
          <button onClick={addItemsToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
