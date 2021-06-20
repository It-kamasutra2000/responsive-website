import React from 'react'
import { useSelector } from 'react-redux'
import { getTopProducts, getThemes, getAboutUsItems, getNextThemes } from '../../../Redux/Selectors/MainPage-selector'
import style from './MainContent.module.scss'
import { Themes } from '../../common/Thems/Themes'
import { TopProduct } from './TopProduct/TopProduct'
import { AllProductsLink } from './AllProductsButtton/AllProductsLink'
import { AboutUsItem } from './AboutItems/AboutUsItems'
import { AwesomeSupport } from './AwesomeSupport/AwesomeSupport'
import { Stars } from '../../common/Stars/Stars'
import { useState } from 'react'
import { Button } from 'antd'
import { CSSTransition } from 'react-transition-group';
import { ThemesType, TopProductsType } from '../../../Redux/MainPage-reducer'




export const MainContent = React.memo(() => {

    const themes = useSelector(getThemes)
    const nextThemes = useSelector(getNextThemes)
    const aboutUsItems = useSelector(getAboutUsItems)
    const topProducts = useSelector(getTopProducts)

    const [currentTheme, setCurrentTheme] = useState(true)
    const [isOpacityZero, setIsOpacityZero] = useState(false)

    const ProductElements = topProducts.map((topProduct: TopProductsType) => <TopProduct key={topProduct.id} Icon={topProduct.icon} header={topProduct.header} text={topProduct.text} />)
    const themeElements = themes.map((theme: ThemesType) => <Themes key={theme.id} img={theme.img} price={theme.price} link={theme.link} />)
    const nextThemeElements = nextThemes.map((theme: ThemesType) => <Themes key={theme.id} img={theme.img} price={theme.price} link={theme.link} />)


    const changeThemes = (currentTheme: boolean) => {
        setIsOpacityZero(true)
        setTimeout(() => {
            setIsOpacityZero(false)
            setCurrentTheme(currentTheme)
        }, 1000)
    }   

    return (
        <div className={style.meinContent}>
            <div className={style.topProducts}>
                {ProductElements}
            </div>
            <h1>
                LATEST ITEMS
            </h1>
            <div className={style.stars}>
                <Stars />
            </div>
            <div className={style.themesContainer}>
                <CSSTransition in={isOpacityZero} timeout={1000} classNames={{
                     enterActive: style.themesEnterActive,
                     exitDone: style.themesExitActive
                }}>
                    {currentTheme ?
                        <div className={style.themes} >{themeElements}</div> :
                        <div className={style.themes} >{nextThemeElements}</div>}
                </CSSTransition>
            </div>
            <div className={style.buttons}>
                <Button type={'primary'} disabled={currentTheme} onClick={() => {
                   changeThemes(true)
                }}>
                    previous
                </Button>
                <Button type={'primary'} disabled={!currentTheme} onClick={() => {
                    changeThemes(false)
                }}>
                    next
                </Button>
            </div>
            <div>
                <AllProductsLink />
            </div>
            <div className={style.aboutUs}>
                {aboutUsItems.map((item: any) => <AboutUsItem key={item.id} Icon={item.icon}
                    header={item.header} text={item.text} link={item.link} />)}
            </div>
            <div>
                <AwesomeSupport />
            </div>
        </div>
    )
})