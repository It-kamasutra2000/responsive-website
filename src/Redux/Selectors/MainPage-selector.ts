import { StateType } from './../store';


 export const getTopProducts = (state: StateType) => {
     return state.MainPage.topProducts
}

export const getThemes = (state: StateType) => {
    return state.MainPage.themes
}

export const getNextThemes = (state: StateType) => {
    return state.MainPage.nextThemes
}

export const getAboutUsItems = (state: StateType) => {
    return state.MainPage.aboutUsItems
}

export const getAwesomeSupport = (state: StateType) => {
    return state.MainPage.awesomeSupport
}

export const getRateValue = (state: StateType) => {
    return state.MainPage.awesomeSupport.rater.value
}
