import React from "react";
import { Stars } from "../../common/Stars/Stars";
import { MainField } from "../MainField/MainField";
import { PurchaseField } from "../PurchaseField/PurchaseField";
import style from './ProductPageContent.module.scss';

export const ProductPageContent: React.FC = React.memo(()=> {
    return (
        <div className={style.productPageContent}>
            <h1 className={style.header}>
                 AWESOME PRODUCT
            </h1>
            <div className={style.stars}>
                <Stars/>
            </div>
            <div className={style.productsInf}>
            <MainField/>
            <PurchaseField/>
            </div>
        </div>
    )
})