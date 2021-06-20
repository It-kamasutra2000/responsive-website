import React from "react"
import { AiFillGooglePlusCircle, AiFillPhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import style from './BottomFooter.module.scss';
import { TiSocialPinterestCircular, TiSocialTwitter } from "react-icons/ti";

export const BottomFooter: React.FC = React.memo(() => {
    return (
        <div className={style.bottomFooter}>
            <div className={style.header}>
                Connect with Scorilo
                </div>
            <div className={style.iconsBlock}>
                <div>
                    <AiFillPhone />
                </div>
                <div>
                    <FaFacebookF />
                </div>
                <div>
                    <TiSocialTwitter />
                </div>
                <div>
                    <AiFillGooglePlusCircle />
                </div>
                <div>
                    <TiSocialPinterestCircular />
                </div>
            </div>
                <div className={style.aboutWebsite}>
                    <div>
                        © 2045 Your Website Name
                    </div>
                    <div>
                        Template by <span>WowThemes</span>
                    </div>
                </div>
            </div>
    )
})