import { legacy_createStore as createStore, combineReducers } from "redux";
import cardReducer from './reducers/cart'

const rootReducer = combineReducers({
    cartProducts: cardReducer
})

const store = createStore(rootReducer)

export default store