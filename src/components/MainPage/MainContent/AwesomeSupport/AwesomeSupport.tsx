import React from 'react';
import { useSelector } from 'react-redux';
import { getAwesomeSupport } from '../../../../Redux/Selectors/MainPage-selector';
import style from './AwesomeSupport.module.scss';
import { Rater } from './Rater/Rater';


export const AwesomeSupport: React.FC = React.memo(() => {

    const awesomeSupport = useSelector(getAwesomeSupport)

    console.log(awesomeSupport.rater)
    return (
        <div className={style.awesomeSupport}>
            <h1>
                {awesomeSupport.header}
            </h1>
            <div>
                <img alt={'avatar'} src={`${awesomeSupport.avatar}`}/>
            </div>
            <p className={style.text}>
                {awesomeSupport.text}
            </p>
            <div>
                <Rater/>
            </div>
        </div>
    )
})





