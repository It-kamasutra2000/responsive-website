import React from "react";
import { MainImg } from "../common/MainImg/MainImg";
import { ProductPageContent } from "./ProductPageContent/ProductPageContent";
import '../../App.scss';


export const ProductPage: React.FC = React.memo(()=> {
    return (
        <>
            <MainImg meinText={'Product'} imgHeight={400}/>
            <div className={'commonContentStyle'}>
                <ProductPageContent/>
            </div>
        </>
    )
})