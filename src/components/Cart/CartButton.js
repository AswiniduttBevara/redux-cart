import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-Slice';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button onClick={buttonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
