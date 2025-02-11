import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ShopContext = createContext();

export const ContextProvider =({children})=>{
    const [value, dispatch] = useReducer(reducer,initialState);

    value.closeAlert =()=>{
        dispatch({type :'CLOSE_ALERT'})
    }
    value.removeFromBasket =(itemId)=>{
        dispatch({type:'REMOVE_FROM_BASKET', payload:{mainId: itemId}})
    }
    value.handleBasketShow = ()=>{
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }
    value.addToBasket =(item)=>{
        dispatch({type:'ADD_TO_BASKET', payload:item})
    }
    value.incrQuantity = (itemId)=>{
        dispatch({type:'INCREMENT_QUANTITY', payload:{mainId: itemId}})
    }
    value.decrQuantity = (itemId)=>{
        dispatch({type:'DECREMENT_QUANTITY', payload:{mainId: itemId}})
    }

    return <ShopContext.Provider value={value} >
        {children}
    </ShopContext.Provider>
}