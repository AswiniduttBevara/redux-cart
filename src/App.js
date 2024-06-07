import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { uiSliceActions } from './store/ui-Slice';
import Notification from './components/UI/Notification';
import { sendCartData, cartDataFetch } from './store/cart-actions';

let initialValue = true;

function App() {

  const dispatch = useDispatch();
  const cartVisibility = useSelector(state => state.ui.cartVisible)
  const cart = useSelector(state => state.cart)
  const notificationStatus = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(cartDataFetch());
  }, [dispatch])

  useEffect(() => {
    
      if(initialValue){
        initialValue = false;
        return;
      }
      if(cart.changed){
        dispatch(sendCartData(cart));
      }
    
  }, [cart, dispatch])
  return (
    <React.Fragment>
      {notificationStatus && <Notification title={notificationStatus.title} status={notificationStatus.status} message={notificationStatus.message} />}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
      </React.Fragment>  
  );
}

export default App;
