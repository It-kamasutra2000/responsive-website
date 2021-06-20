import React, { useEffect, useState } from "react"
import style from './MainImg.module.scss'
import mainImg from '../../../image/mainImg.jpg';

type PropsType = {
    meinText: string
    imgHeight: number
}

export const MainImg: React.FC<PropsType> = React.memo(({meinText, imgHeight}) => {

    const [textAppear, setTextAppear] = useState(false)

    useEffect(()=> {
        const timerId = setTimeout(() => {
            setTextAppear(true)
        }, 1000);
        return () => {
            clearTimeout(timerId)
        }
    })
    
    return (
        <div className={style.mainImg}>
          <div className={`${style.imgText} ${textAppear ? style.active : ''}`}>
               {meinText}
            </div>
            <div>
                <img style={{height: imgHeight}} src={mainImg} alt={'mainImg'} />
            </div>
        </div>
    )
})