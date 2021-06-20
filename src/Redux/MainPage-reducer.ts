import { FaShoppingCart } from 'react-icons/fa';
import { GiPresent } from 'react-icons/gi';
import { ImDownload3 } from 'react-icons/im';
import { AiFillMessage, AiFillChrome } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { InferActionsType } from './store';

const initialState = {
    topProducts: [
        {
            id: 1, icon: FaShoppingCart, header: 'CHOOSE OUR PRODUCTS', text: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor 
        auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`},
        {
            id: 2, icon: GiPresent, header: 'PAY WITH PAYPAL OR CARD', text: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
         Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`},
        {
            id: 3, icon: ImDownload3, header: 'GET INSTAND DOWNLOAD', text: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
        Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`}
    ],
    themes: [
        {
            id: 1, img: `https://themeforest.img.customer.envatousercontent.com/files/279332396/01_Presentation.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=bfc649bb881bac53042a1ac6202605b9`,
            link: 'CALYPSO THEME', price: '$49.00'
        },
        {
            id: 2, img: `https://assets.shopfront.envato-static.com/images/home-page/new-design/themeforest/category-tiles-ecommerce.png`,
            link: 'FASTSELL THEME', price: '$49.00'
        },
        {
            id: 3, img: `https://assets.shopfront.envato-static.com/images/home-page/new-design/themeforest/category-tiles-wordpress.png`,
            link: 'BISCAYA THEME', price: '$51.00'
        }
    ],
    nextThemes: [
        {
            id: 1, img: `https://s.tmimgcdn.com/scr/800x500/68000/webion-mnogocelevaa-tema-wordpress-s-minimalnym-elementom-ili_68092-5-original.jpg`,
            link: 'HYPNOSA THEME', price: '$100.00'
        },
        {
            id: 2, img: `https://i0.wp.com/themes.svn.wordpress.org/web-development/1.1/screenshot.png?w=572&strip=all`,
            link: 'SHERENITY THEME', price: '$110.00'
        },
        {
            id: 3, img: `https://uicookies.com/wp-content/uploads/2019/08/technology-website-templates-wordpress-themes.jpg`,
            link: 'EXPERTUM THEME', price: '$120.00'
        }
    ],
    aboutUsItems: [
        {
            link: 'Get in Touch', id: 1, icon: BsFillMicFill, header: 'GENERAL QUESTIONS', text: `Want to buy a theme but not sure if it's got all the features you need? Trouble completing 
        the payment? Or just want to say hi? Send us your message and we will answer as soon as possible!`
        },
        {
            link: 'Select Theme', id: 2, icon: AiFillMessage, header: 'THEME SUPPORT', text: `Theme support issues prevent the theme from working as
         advertised in the demo. This is a free and guaranteed service offered through our support forum which is found in each theme.`},
        {
            link: 'Get in Touch', id: 3, icon: AiFillChrome, header: 'HIRE US', text: `If you wish to change an element to look or function differently than shown in the demo, we 
        will be glad to assist you. This is a paid service due to theme support requests solved with priority.`}
    ],
    awesomeSupport: {
        header: 'AWESOME SUPPORT',
        avatar: 'https://www.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        text: `The support... I can only say it's awesome. You make a product and you help people out any way you can even if 
        it means that you have to log in on their dashboard to sort out any problems that customer might have. Simply Outstanding!`,
        rater: {
            value: 3
        }
    }
};


export type TopProductsType = typeof initialState.topProducts[0]
export type ThemesType = typeof initialState.themes[0]
export type InitialStateType = typeof initialState
type ActionType = InferActionsType<typeof actions>

const MainPageReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_RATER_COUNT':
            return {
                ...state,
                awesomeSupport: { ...state.awesomeSupport, rater: action.payload }
            }
        default:
            return state
    }

}


export const actions = {
    setRaterCount: (value: number) => ({ type: 'SET_RATER_COUNT', payload: { value } } as const)
}


export default MainPageReducer;