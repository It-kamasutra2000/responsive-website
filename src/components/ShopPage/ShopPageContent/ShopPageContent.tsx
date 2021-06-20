import React from "react"
import { useSelector } from "react-redux";
import { selectThemes } from "../../../Redux/Selectors/ShopPage-selector";
import { Themes } from "../../common/Thems/Themes";
import style from './ShopPageContent.module.scss';
import { Stars } from "../../common/Stars/Stars";
import { ThemesType } from "../../../Redux/MainPage-reducer";

export const ShopPageContent: React.FC = React.memo(() => {

    const themes = useSelector(selectThemes)

    const ThemesElements = themes.map((theme: ThemesType) => <Themes key={theme.id} img={theme.img} price={theme.price} link={theme.link} />)

    return (
        <div className={style.shopPage}>
            <h1 >
                OUR PRODUCTS
            </h1>
            <div className={style.stars}>
               <Stars/>
            </div>
            <div className={style.ourProductsItems}>
                {ThemesElements}
            </div>
        </div>
    )
})