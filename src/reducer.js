
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


        default:
                return state;
        }
}