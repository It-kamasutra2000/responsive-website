import React from "react"
import { BottomFooter } from "./BottomFooter/BottomFooter";
import style from './Footer.module.scss';
import { ТopFooter } from "./TopFooter/TopTooter";

export const Footer: React.FC = React.memo(() => {
    return (
        <div className={style.footer}>
            <ТopFooter/>
            <BottomFooter/>
        </div>
    )
})