import React from "react"
import { AiFillStar } from 'react-icons/ai';
import style from './Stars.module.scss';

export const Stars: React.FC = React.memo(() => {
    return (
        <div className={style.stars}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
    )
})