import { combineReducers } from "redux";
import GetProductsReducers from "./GetProductsReducers";
import FilterProductsReducer from "./FilterProductsReducers";
import GetAllProductTypesReducers from "./GetAllProductTypesReducers";


const rootReducer = combineReducers({
    GetProductsReducers,
    FilterProductsReducer,
    GetAllProductTypesReducers
});

export default rootReducer; 
