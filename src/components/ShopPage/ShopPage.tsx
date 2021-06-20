import React from "react"
import { MainImg } from "../common/MainImg/MainImg"
import { ShopPageContent } from "./ShopPageContent/ShopPageContent"
import './../../App.scss'

export const ShopPage: React.FC = React.memo(() => {
    return (
        <>
        <div>
           <MainImg meinText={'Shop'} imgHeight={400}/>
        </div>
        <div className={'commonContentStyle'}>
            <ShopPageContent/>
        </div>
        </>
    )
})