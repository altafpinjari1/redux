const initialState={
    cardData:[]
}
export default function cartItems(state=[],action){
    switch (action.type){
        case 'ADD_TO_CART':
            return[
                ...state,{cardData:action.data}
            ]
            case 'REMOVE_TO_CART' :
                state.pop();
                return[
                  ...state,
                ]
                default :
                return[
                    state
                ]
                
    }
}











