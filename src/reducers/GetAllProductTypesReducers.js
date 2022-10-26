import {
    FETCH_PRODUCT_TYPES_PENDING,
    FETCH_PRODUCT_TYPES_SUCCESS,
    FETCH_PRODUCT_TYPES_ERROR
} from "../constants/BaseUrlApi";

const initialState = {
    productType: [],
    pending: false,
    error: null
};

function GetAllProductTypesReducers (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_TYPES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCT_TYPES_SUCCESS:
            return {
                ...state,
                productType: action.data,
                pending: false
            }
        case FETCH_PRODUCT_TYPES_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false
            }
        default:
            return state;
    }
};

export default GetAllProductTypesReducers;