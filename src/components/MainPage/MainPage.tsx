import React from "react"
import { MainContent } from "./MainContent/MainContent"
import { MainImg } from "../common/MainImg/MainImg"
import '../../App.scss'

export const MainPage: React.FC = React.memo(() => {
    return (
        <>
            <MainImg meinText={` INCREASE DIGITAL SALES
                Boost revenue with Scorilo`} imgHeight={700} />
            <div className={'commonContentStyle'}>
                <MainContent />
            </div>
        </>
    )
})