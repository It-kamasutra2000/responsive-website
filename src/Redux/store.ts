import { createStore, combineReducers } from 'redux' 
import CheckoutPageReducer from './CheckoutPage-reducer'
import MainPageReducer from './MainPage-reducer'
import ProductPageReducer from './ProductPage-reducer'
import ShopPageReducer from './ShopPage-reducer'

const RootReducer = combineReducers({
    MainPage: MainPageReducer,
    ShopPage: ShopPageReducer,
    ProductPage: ProductPageReducer,
    CheckoutPage: CheckoutPageReducer
})

type PropertiesType<T> = T extends {[key: string]: infer U } ? U : never
export type InferActionsType<T extends {[key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>
export type StateType = ReturnType<typeof RootReducer>

const store = createStore(RootReducer)

//@ts-ignore
window.__store__ = store

export default store;