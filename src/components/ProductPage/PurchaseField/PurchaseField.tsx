import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectPurchaseField } from '../../../Redux/Selectors/ProductPage-selector';
import style from './PurchaseField.module.scss';


export const PurchaseField: React.FC = React.memo(() => {

    const purchaseField = useSelector(selectPurchaseField);

    return (
        <div className={style.purchaseField}>
            <div className={style.purchase}>
                <NavLink to={''}> $<span>{purchaseField.purchase}</span>-PURCHASE </NavLink>
            </div>
            <div className={style.productInformation}>
                <div>
                    Version: <span>{purchaseField.information.Version}</span>
                </div>
                <div>
                    Image Size: <span>{purchaseField.information.ImageSize}</span>
                </div>
                <div>
                    Files Included: <span>{purchaseField.information.FilesIncluded}</span>
                </div>
                <div>
                    Documentation: <span>{purchaseField.information.Documentation}</span>
                </div>
                <div>
                    License: <span>{purchaseField.information.License}</span>
                </div>
                <div>
                    Requires: <span>{purchaseField.information.Requires}</span>
                </div>
                <div>
                    Environment: <span>{purchaseField.information.Environment}</span>
                </div>
                <div>
                    Any Field Etc: <span>{purchaseField.information.AnyFieldEtc}</span>
                </div>
                <div>
                    Number: <span>{purchaseField.information.Number}</span>
                </div>
                <div>
                    Live Demo:  <NavLink to={''}> <span>{purchaseField.information.LiveDemo}</span></NavLink>
                </div>
            </div>
        </div>
    )
})