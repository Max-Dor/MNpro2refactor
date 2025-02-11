
export function reducer (state,{type,payload}){
        switch(type){
                case 'INCREMENT_QUANTITY':
                        return{
                                ...state,
                                order: state.order.map(e=>{
                                        if(e.mainId === payload.itemId ){
                                                const newQuantity = e.quantity + 1;
                                                return{
                                                ...e,
                                                quantity: newQuantity
                                        }
                                        }else{
                                                return e;
                                        }
                                })
                        }
                case 'DECREMENT_QUANTITY':
                        return{
                                ...state,
                                order: state.order.map(e=>{
                                        if(e.mainId === payload.itemId ){
                                                const newQuantity = e.quantity - 1;
                                                return{
                                                ...e,
                                                quantity: newQuantity >= 0 ? newQuantity: 0,
                                        }
                                        }else{
                                                return e;
                                        }
                                })
                        }
                case 'HANDLE_BASKET_SHOW':
                        return{
                                ...state,
                                isBasketShow: !state.isBasketShow,
                        }
                case 'CLOSE_ALERT':
                        return{
                                ...state,
                                alertName: '',
                        }
                case 'REMOVE_FROM-BASKET':
                        return{
                                ...state,
                                order: state.order.filter((el) => el.mainId !== payload.mainId)
                        }
                case 'ADD_TO_BASKET': {
                        const itemIndex = state.order.findIndex(
                                (orderItem) => orderItem.mainId === payload.mainId);

                        let newOrder = null;
                        if(itemIndex < 0){
                                const newItem = {
                                ...payload,
                                quantity: 1,
                        };
                                newOrder = [...state.opder, newItem];
                        }else{
                                newOrder = state.order.map((orderItem, index)=> {
                                if(index === itemIndex){
                                        return {
                                        ...orderItem,
                                        quantity: orderItem.quantity + 1,
                                }
                                }else{
                                        return orderItem;
                                }
                        });
                        }
                        return {
                                ...state,
                                order: newOrder,
                                alertName: payload.displayName,
                        }
                }
        default:
                return state;
        }
}