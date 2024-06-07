import { uiSliceActions } from "./ui-Slice";
import { cartSliceActions } from "./cart-Slice"; 

export const cartDataFetch = () => {
    return async (dispatch) => {
        const receiveResponse = async () => {
            const res = await fetch('https://movie-http-4e12e-default-rtdb.firebaseio.com/cart.json');

            if(!res.ok){
                throw new Error('failed to fetch data');
            }

            const data = await res.json();

            return data;
        }

        try{
            const responseData = await receiveResponse();
            dispatch(cartSliceActions.replaceCart({
                items:responseData.items || [], totalQuantity : responseData.totalQuantity
            }));
            dispatch(uiSliceActions.showNotification({
                title : 'success',
                status : 'success',
                message : 'fetched data successful'
              }))
        }catch(error){
            dispatch(uiSliceActions.showNotification({
                title : 'error',
                status : 'error',
                message : 'failed to fetch the data'
              }))
        }
    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiSliceActions.showNotification({
            title : 'pending',
            status : 'pending',
            message : 'sending data pending'
          }))

          const sendRequest = async () => {
                const res = await fetch('https://movie-http-4e12e-default-rtdb.firebaseio.com/cart.json',{
                            method : 'PUT',
                            body : JSON.stringify({items : cart.items, totalQuantity : cart.totalQuantity}),
                            });

                if(!res.ok){
                    throw new Error('sending data failed');
                }
            };
          
          try{
            await sendRequest();
            dispatch(uiSliceActions.showNotification({
                title : 'success',
                status : 'success',
                message : 'sending data successful'
              }))
          }catch(err){
            dispatch(uiSliceActions.showNotification({
                title : 'error',
                status : 'error',
                message : 'sending data failed'
              }))
          }


    }
}
