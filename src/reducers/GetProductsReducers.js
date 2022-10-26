import { 
    FETCH_PRODUCTS_PENDING, 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCT_BY_ID_PENDING,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_ERROR
} from "../constants/BaseUrlApi";

import { PAGINATION_CHANGE } from "../constants/PaginationChange";

import { GET_ALL_PRODUCT_FILTER } from "../constants/FilterProducts";

//giới hạn số dòng trên 1 trang
const limitPage = 6;

const initialState = {
    products: [], //homepage
    productsList: [], //shop
    pending: false,
    error: null,
    noPage: 0, //pagination
    currentPage: 1, //pagination
    productDetails: [] //productDetails
};

export default function GetProductsReducers (state = initialState, action) {
    switch(action.type) {
        
        //get all products (trang shop)
        case FETCH_PRODUCTS_PENDING: 
            return{
                ...state,
                pending: true
        };
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.data.products,
                productsList: action.data.products.slice((state.currentPage - 1) * limitPage, state.currentPage * limitPage),
                noPage: Math.ceil(action.data.products.length / limitPage),
                pending: false
        };
        case FETCH_PRODUCTS_ERROR:
            return{
                ...state,
                error: action.error,
                pending: false
        };

        //sự kiện ấn nút chuyển trang
        case PAGINATION_CHANGE:
            return{
                ...state,
                currentPage: action.payload
        };

        //get product by productId (để chuyển sang trang product details)
        case FETCH_PRODUCT_BY_ID_PENDING: 
            return{
                ...state,
                pending: true
        };
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            return{
                ...state,
                productDetails: action.data.products,
                pending: false
        };
        case FETCH_PRODUCT_BY_ID_ERROR:
            return{
                ...state,
                error: action.error,
                pending: false
        };
        //get all product filter
        case GET_ALL_PRODUCT_FILTER:
            return{
                ...state,
                productsList: action.data.slice((state.currentPage - 1) * limitPage, state.currentPage * limitPage),
                noPage: Math.ceil(action.data.length / limitPage),
                pending: false
        };
        default:
            return state;
    };
};