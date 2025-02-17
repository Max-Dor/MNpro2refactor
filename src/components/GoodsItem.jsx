import { useContext } from 'react';
import { ShopContext } from '../context';

export function GoodsItem(props){
    const {mainId, displayName,displayAssets, displayDescription, price}= props;

    const{addToBasket} = useContext(ShopContext);

    const https = "https://media.fortniteapi.io/images/shop/82c1537ae50314ad77e00b90ed82914311d121a4cd00eb39933057517406c480/v2/MI_CID_A_336_M_Zest/background.png";

    return  <div className="card" >
                <div className="card-image">
                    <img src = {displayAssets[0].background ? displayAssets[0].background: https} alt={displayName} />
                </div>
                <div className="card-content">
                    <span className="card-title">{displayName}</span>
                    <p>
                        {displayDescription}
                    </p>
                </div>
                <div className='card-action' >
                    <button className='btn' onClick={()=> addToBasket({mainId, displayName, price})} >Купить</button>
                    <span className='right' >{price.regularPrice}</span>
                </div>
            </div>
}