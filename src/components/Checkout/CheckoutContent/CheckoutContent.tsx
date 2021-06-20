import React from "react"
import { Stars } from "../../common/Stars/Stars"
import style from './CheckoutContent.module.scss'
import { CheckoutContentTable } from "./CheckoutContentTable/CheckoutContentTable"
import { PersonalInfoForm } from "./PersonalInfo/PersonalInfo"

export const CheckoutContent: React.FC = React.memo(() => {
    return (
        <div className={style.checkoutContent}>
            <h1 className={style.header}>
                MAKE PAYMENT
            </h1>
            <div className={style.stars}>
                <Stars />
            </div>
            <div>
                <CheckoutContentTable />
            </div>
            <div>
                <PersonalInfoForm />
            </div>
        </div>
    )
})
