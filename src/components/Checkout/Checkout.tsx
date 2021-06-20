import React from "react"
import { MainImg } from "../common/MainImg/MainImg"
import style from './Checkout.module.scss'
import { CheckoutContent } from "./CheckoutContent/CheckoutContent"
import '../../App.scss'

export const CheckoutPage: React.FC = React.memo(()=> {
    return (
        <div className={style.checkout}>
            <MainImg meinText={'Checkout'} imgHeight={400}/>
            <div className='commonContentStyle'>
                <CheckoutContent/>
            </div>
        </div>
    )
})