//customHook
import { useState } from "react";

const initialState = {
    cart:[],

};
const useInitialState =()=>{

    const[state,setState] = useState(initialState);
//payload es el producto
    const addToCart = (payload) =>{
        setState({
            //manten el estado se obtiene con ...
            ...state,
            //lo que ya existe mantenerlo y agrega lo que se recibe
            cart:[...state.cart,payload],
        });
    };
    const removeFromCart = (payload)=>{
        setState({
            //lo que este en el estado mantenlo
            ...state,
            //filtro para encontrar el item y eliminarlo
            //de los items que tengo, de su id buscar el diferente 
            cart: state.cart.filter(items => items.id !== payload.id),

        });

    }
    return{
        state,
        addToCart,
        removeFromCart
    }
}
export default useInitialState;