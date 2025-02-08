
export function reducer (state,{type,payload}){
        switch(type){
                case 'HANDLE-BASKET-SHOW':
                        return{
                                ...state,
                                isBasketShow: !isBasketShow,
                        }
                case 'CLOSE_ALERT':
                        return{
                                ...state,
                                alertName: '',
                        }
                case 'REMOVE-FROM-BASKET':
                        return{
                                ...state,
                                order: state.order.filter(el => el.mainId !== payload.mainId)
                        }
                case 'ADD_TO_BASKET':{
                        const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId)

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
                                alertName: payload.name,
                        }
                }

        default:
                return state;
        }
}