import { Rate } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../../../Redux/MainPage-reducer";
import { getRateValue } from '../../../../../Redux/Selectors/MainPage-selector'


export const Rater: React.FC = React.memo(() => {

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    
    const value = useSelector(getRateValue)
    const dispatch = useDispatch()
    
      const handleChange = (currentValue: number) => {
       dispatch(actions.setRaterCount(currentValue))
      };
    
        return (
          <span>
            <Rate tooltips={desc} onChange={handleChange} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
        );
    })
    