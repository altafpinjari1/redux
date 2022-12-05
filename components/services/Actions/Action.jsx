import { ADD_TO_CART,REMOVE_TO_CART } from "../Reducers/Constants";


export const AddToCart = (data) => {
    return {
       type: ADD_TO_CART,
       data:data
    }
};
 
export const RemoveFromCart = () =>{
    return{
        type:REMOVE_TO_CART,
    }
}

