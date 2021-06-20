import React from "react"
//import { useState } from "react";
import { GiPresent } from "react-icons/gi"
import style from './TopFooter.module.scss';
//import { CSSTransition } from 'react-transition-group';
import { NavLink } from "react-router-dom";


export const ТopFooter: React.FC = React.memo(() => {

    //const [transformActive, setTransformActive] = useState(false)

    return (
        <div className={style.topFooter}>
            {/* <Button type={'primary'} onClick={() => {
                setTransformActive(true)
                setTimeout(() => {
                    setTransformActive(false)
                }, 1500)
            }}>
                active
            </Button> */}
            {/* <CSSTransition in={transformActive} timeout={500} classNames={{
                enterActive: style.bodyEnterActive,
                exitDone: style.bodyExitActive
            }}> */}
                <div className={style.body}>
                    <div className={`${style.text}`}>
                        Promote Items Area Give Discount to Buyers
                    </div>
                    <div className={style.block}>
                        <GiPresent /> <NavLink to={'/WOW24TH'}>WOW24TH</NavLink>
                    </div>
                </div>
            {/* </CSSTransition> */}
        </div>
    )
})