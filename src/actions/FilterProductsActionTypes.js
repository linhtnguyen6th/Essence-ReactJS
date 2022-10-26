import { 
    VALUE_PRODUCT_NAME_INPUT,
    VALUE_MIN_PRICE_INPUT,
    VALUE_MAX_PRICE_INPUT,
    VALUE_PRODUCT_TYPE_SELECT
} from "../constants/FilterProducts";



const productNameChangeHandler = (value) => {
    return{
        type: VALUE_PRODUCT_NAME_INPUT,
        payload: value
    };
};


const minPromoPriceChangeHandler = (value) => {
    return{
        type: VALUE_MIN_PRICE_INPUT,
        payload: value
    };
};


const maxPromoPriceChangeHandler = (value) => {
    return{
        type: VALUE_MAX_PRICE_INPUT,
        payload: value
    };
};


const productTypeChangeHandler = (value) => {
    return{
        type: VALUE_PRODUCT_TYPE_SELECT,
        payload: value
    };
};


const clearInput = () => {
    return{
        type: VALUE_PRODUCT_NAME_INPUT,
        payload: ""
    };
};





export {
    productNameChangeHandler,
    minPromoPriceChangeHandler,
    maxPromoPriceChangeHandler,
    productTypeChangeHandler,
    clearInput
};