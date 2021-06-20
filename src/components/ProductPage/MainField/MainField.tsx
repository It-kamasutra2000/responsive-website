import { Image } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMainField } from '../../../Redux/Selectors/ProductPage-selector';
import style from './MainField.module.scss';


export const MainField: React.FC = React.memo(()=> {

    const mainField = useSelector(selectMainField);

    return (
        <div className={style.mainField}>
            <div className={style.img}>
                <Image src={mainField.img} alt={'mainFieldImg'}/>
             </div>
             <p className={style.text}>
                {mainField.text}
             </p>
        </div>
    )
})