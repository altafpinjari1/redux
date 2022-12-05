import { BikeList } from "../BikeList";
import connect from 'react-redux';
import {AddToCart,RemoveFromCart} from "../services/Actions/Action";

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addTocartHandler:data=>dispatch(AddToCart(data)),
    removeFromcartHandler:data=>dispatch(RemoveFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(BikeList);
