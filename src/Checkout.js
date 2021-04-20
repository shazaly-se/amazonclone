import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
           <div className="checkout__left"> 
       <img className="checkout__ad"  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        {basket?.length ===0 ? (
            <div>
                <h2>Your basket is empty</h2>
                <p>You have no items in your basket. To buy one or </p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">your basket</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                     rating={item.rating}
                     />
                ))}
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
                </div>
        )}
        </div>
    )
}

export default Checkout
