import React from 'react'
import style from './TopProduct.module.scss'

type PropsType = {
    header: string
    text: string
    Icon: React.ComponentType
}

export const TopProduct: React.FC<PropsType> = React.memo(({header, text, Icon}) => {
console.log(header, text)
    return (
        <div className={style.topProduct}>
            <div className={style.icon}>
                <Icon/>
            </div>
            <div className={style.header}>
               {header}
            </div>
            <p className={style.text}>
              {text}
            </p>
        </div>
    )
})