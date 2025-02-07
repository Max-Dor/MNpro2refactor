import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState ={
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
        dispatch({type:'REMOVE-FROM-BASKET', payload:{mainId: itemId}})
    }
    value.handleBasketShow = ()=>{
        dispatch({type: 'HANDLE-BASKET-SHOW'})
    }

    return <ShopContext.Provider value={value} >
        {children}
    </ShopContext.Provider>
}