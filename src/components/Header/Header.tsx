import { Layout } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss'
const { Header } = Layout;



export const AppHeader = () => {


    const [menuList, setMenuList] = useState(false)


    return (
        <Header className={style.header}>
            <div className={style.container}>
                <div className={style.body}>
                    <div className={style.logo}>
                        SCORILO
                    </div>
                    <div className={`${style.burger} ${menuList ? style.active : ''}`} onClick={() => {
                        setMenuList(!menuList)
                    }}>
                        <span></span>
                    </div>
                    <div className={`${style.menu} ${menuList ? style.active : ''}`} onClick={() => { setMenuList(false) }}>
                        <ul className={style.list}>
                            <li className={style.link}>
                                <NavLink to={'/main'}>HOME</NavLink>
                            </li>
                            <li className={style.link}>
                                <NavLink to={'/shop'}>SHOP</NavLink>
                            </li>
                            <li className={style.link}>
                                <NavLink to={'/product'}>PRODUCT</NavLink>
                            </li>
                            <li className={style.link}>
                                <NavLink to={'/checkout'}>CHECKOUT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Header>
    )
}

