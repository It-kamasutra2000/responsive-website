import { Button, Image, Table } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import style from './CheckoutContentTable.module.scss';

export const CheckoutContentTable: React.FC = React.memo(()=> {

    return (
        <div className={style.table}>  
           <div className={style.topBlock}>
             <div className={style.itemName}>
               Item Name
             </div>
             <div className={style.itemPrice}>
              Item Price
             </div>
             <div className={style.actions}>
              Actions
             </div>
             <div className={style.imgBlock}>
               <Image width={25} src={'https://techilive.com/wp-content/uploads/2019/12/TOP-10-Technologies-set-to-transform-the-IT-space-by-2020.jpg'}
               alt={'small img'}/>
                <p>
                Audio Item - Single License
               </p>
             </div>
             <div className={style.price}>
              $11.99
             </div>
             <div className={style.RemoveLink}>
                <NavLink to={''}>Remove</NavLink>
             </div>
           </div>
           <div className={style.saveCartBottom}>
             <Button type={'text'}>save cart</Button>
           </div>
           <div className={style.totalPrice}>
              Total: $11.99 
           </div>
        </div>
    )
})