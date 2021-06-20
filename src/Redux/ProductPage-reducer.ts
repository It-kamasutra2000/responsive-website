
const initialState = {
    mainField: {
        img: 'https://1cjy3t17q2e1435g023mo061-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/wordpress-podcast.jpg',
        text: `Your description here. Serenity is a highly-professional & modern website theme crafted with you, the user, in mind. This
        light-weight theme is generous, built with custom types and enough shortcodes tocustomize each page according
         to your project. You will notice some examples of pages in demo, but this theme can do much more.`
    },
    purchaseField: {
        purchase: '49.00',
        information: {
            Version: 1.0,
            ImageSize: '2340x1200',
            FilesIncluded: ' mp3, audio, jpeg, png',
            Documentation: ' Well Documented',
            License: 'GNU',
            Requires: 'Easy Digital Downloads',
            Environment: 'Wordpress',
            AnyFieldEtc: 'Any Detail',
            Number: 'Up to 20 specifications in this box',
            LiveDemo: 'Here'
        }
    }
};



export type InitialStateType = typeof initialState

const ProductPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }

}


export default ProductPageReducer;