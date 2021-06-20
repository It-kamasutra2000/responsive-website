import React, { useState } from "react"
import style from './Themes.module.scss';
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineExpandAlt } from "react-icons/ai";


type PropsType = {
    img: string
    price: string
    link: string
}

export const Themes: React.FC<PropsType> = React.memo(({ img, price, link }) => {

    const [isThemeImg, setIsThemeImg] = useState(true)

    return (
        <div className={style.theme}>
            <div className={style.topBlock} onMouseEnter={() => {
                setIsThemeImg(false)
            }}
                onMouseLeave={() => {
                    setIsThemeImg(true)
                }}>
                {isThemeImg
                    ? <div className={style.img}>
                        <img src={img} alt={'theme'} />
                    </div>
                    : <div className={style.itemName}>
                        <div className={style.header}>
                            Item Name
                        </div>
                        <p className={style.text}>
                            This is a short excerpt to generally describe what the item is about.
                        </p>
                        <div className={style.blocks}>
                            <div>
                                <FaShoppingCart className={style.icon} /> <span>PURCHASE</span>
                            </div>
                            <div>
                                <AiOutlineExpandAlt className={style.icon} /> <span>DETAILS</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={style.link}>
                <NavLink to={''}>
                    {link}
                </NavLink>
            </div>
            <div className={style.count}>
                {price}
            </div>
        </div>
    )
})