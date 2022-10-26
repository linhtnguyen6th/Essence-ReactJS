import { 
    VALUE_PRODUCT_NAME_INPUT,
    VALUE_MIN_PRICE_INPUT,
    VALUE_MAX_PRICE_INPUT,
    VALUE_PRODUCT_TYPE_SELECT
} from "../constants/FilterProducts";


const initialState = {
    productNameInput: "",
    minPromoPriceInput: "",
    maxPromoPriceInput: "",
    productTypeSelect: []
};

export default function FilterProductsReducer(state = initialState, action) {
    switch(action.type) {
        //sự kiện onChange của input
        case VALUE_PRODUCT_NAME_INPUT:
            return{
                ...state,
                productNameInput: action.payload
            }
        case VALUE_MIN_PRICE_INPUT:
            return{
                ...state,
                minPromoPriceInput: action.payload
            }
        case VALUE_MAX_PRICE_INPUT:
            return{
                ...state,
                maxPromoPriceInput: action.payload
            }
        case VALUE_PRODUCT_TYPE_SELECT:
            return{
                ...state,
                productTypeSelect: action.payload
            } 
        default:
            return state;
    };
};