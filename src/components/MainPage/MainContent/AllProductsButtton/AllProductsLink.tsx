import React from "react"
import style from './AllProductsLink.module.scss'
import {
    StarOutlined 
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";

export const AllProductsLink: React.FC = React.memo(() => {
    return (
        <div className={style.allProductsLink}>
            <div className={style.allProducts}>
                <NavLink to={'/allProducts'}>Browse All Products</NavLink>
            </div>
            <div className={style.starBlock}>
                <NavLink to={'/allProducts'}><StarOutlined  className={style.star} spin={true}/> </NavLink>
            </div>
        </div>
    )
})