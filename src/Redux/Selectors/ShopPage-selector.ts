import { StateType } from './../store';

export const selectThemes = (state: StateType) => {
    return state.ShopPage.themes
}