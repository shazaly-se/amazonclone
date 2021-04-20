import React from 'react'
import './Subtotal.css'
import {useStateValue} from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
               <input type="checkbox" />this order contain
                </small>
                </>
            )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
             />
            <button>proccess succeed</button>
        </div>
    )
}

export default Subtotal
