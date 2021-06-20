import React from 'react'
import style from './AboutUsItems.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    Icon: React.ComponentType
    header: string
    text: string
    link: string;
}

export const AboutUsItem: React.FC<PropsType> = React.memo(({Icon, header, text, link}) => {
    return (
        <div className={style.aboutUsItem}>
            <div className={style.icon}>
                <Icon/>
            </div>
            <div className={style.header}>
                {header}
            </div>
            <p className={style.text}>
                {text}
            </p>
            <div className={style.link}>
               <NavLink to={''}>-{link}-</NavLink>
            </div>
        </div>
    )
})