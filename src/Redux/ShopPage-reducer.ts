
const initialState = {
    themes: [
        {
            id: 1, img: `https://themefisher.com/wp-content/uploads/edd/2019/04/Classimax.jpg`,
            link: 'CALYPSO THEME', price: '$49.00'
        },
        {
            id: 2, img: `https://assets.shopfront.envato-static.com/images/home-page/new-design/themeforest/category-tiles-ecommerce.png`,
            link: 'FASTSELL THEME', price: '$49.00'
        },
        {
            id: 3, img: `https://assets.shopfront.envato-static.com/images/home-page/new-design/themeforest/category-tiles-wordpress.png`,
            link: 'BISCAYA THEME', price: '$51.00'
        },
        {
            id: 4, img: `https://uicookies.com/wp-content/uploads/2019/08/technology-website-templates-wordpress-themes.jpg`,
            link: 'EXPERTUM THEME', price: '$35.00'
        },
        {
            id: 5, img: `https://i0.wp.com/themes.svn.wordpress.org/web-development/1.1/screenshot.png?w=572&strip=all`,
            link: 'SHERENITY THEME', price: '$49.00'
        },
        {
            id: 6, img: `https://s.tmimgcdn.com/scr/800x500/68000/webion-mnogocelevaa-tema-wordpress-s-minimalnym-elementom-ili_68092-5-original.jpg`,
            link: 'HYPNOSA THEME', price: '$35.00'
        }
    ]
};



export type InitialStateType = typeof initialState

const ShopPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }

}



export default ShopPageReducer;