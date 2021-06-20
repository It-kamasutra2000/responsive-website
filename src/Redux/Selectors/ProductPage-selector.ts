import { StateType } from './../store';

export const selectMainField = (state: StateType) => {
    return state.ProductPage.mainField
}

export const selectPurchaseField = (state: StateType) => {
    return state.ProductPage.purchaseField
}