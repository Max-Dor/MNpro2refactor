import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

export function Alert(){
    const { alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 3000)

        return ()=>{
            clearTimeout(timerId)
        }
    },[name]);
    return <div id='toast-container'>
                <div className='toast' >
                    {name} Добавлен в корзину
                </div>
    </div>
}