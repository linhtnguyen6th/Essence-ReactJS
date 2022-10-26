//Action creators
//** --------- */
import { 
    BASE_URL_PRODUCT,
    BASE_URL_PRODUCT_TYPES,
    FETCH_PRODUCTS_PENDING, 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCT_BY_ID_PENDING,
    FETCH_PRODUCT_BY_ID_SUCCESS,
    FETCH_PRODUCT_BY_ID_ERROR,
    FETCH_PRODUCT_TYPES_PENDING,
    FETCH_PRODUCT_TYPES_SUCCESS,
    FETCH_PRODUCT_TYPES_ERROR
} from "../constants/BaseUrlApi";

import { PAGINATION_CHANGE } from "../constants/PaginationChange";

import { GET_ALL_PRODUCT_FILTER } from "../constants/FilterProducts";

//call API get products
const FetchApiProducts = (limit) => async dispatch => {

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    await dispatch({
        type: FETCH_PRODUCTS_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_PRODUCT + `?limit=${limit}`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            data: data
        });
    } catch (err) {
        return dispatch({
            type: FETCH_PRODUCTS_ERROR,
            error: err
        });
    }
};


//xử lý sự kiện thay đổi trang
const PaginationChange = (value) => {
    return{
        type: PAGINATION_CHANGE,
        payload: value
    };
};

//xử lý sự kiện lấy productId chuyển sang trang product details
const GetProductById = (productId) => async dispatch => {
    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    await dispatch({
        type: FETCH_PRODUCT_BY_ID_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_PRODUCT + `${productId}`, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: FETCH_PRODUCT_BY_ID_SUCCESS,
            data: data
        });
    } catch (err) {
        return dispatch({
            type: FETCH_PRODUCT_BY_ID_ERROR,
            error: err
        });
    }
};


// gọi API, get all product types
const FetchApiProductTypes = () => async dispatch => {

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    await dispatch({
        type: FETCH_PRODUCT_TYPES_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_PRODUCT_TYPES, requestOptions
        );

        const data = await response.json();
        // console.log(data);

        return dispatch({
            type: FETCH_PRODUCT_TYPES_SUCCESS,
            data: data.productTypes
        });
    } catch (err) {
        return dispatch({
            type: FETCH_PRODUCT_TYPES_ERROR,
            error: err
        });
    }
};


//xử lý filter products, gọi API, truyền các giá trị vào query
const GetAllFilterProducts = (productNameInput, minPromoPriceInput, maxPromoPriceInput, checked) => async dispatch => {
    var requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        // const regex = new RegExp('s/^\(.\)/\U\1/' + productNameInput);

        const response = await fetch (BASE_URL_PRODUCT + `?productName=${productNameInput}&minPromoPrice=${minPromoPriceInput}&maxPromoPrice=${maxPromoPriceInput}&type=${checked}`, requestOptions)

        const data = await response.json();

        //nếu user không chọn giá trị ở product type
        if(checked === "undefined" || checked.length === 0) {
            return dispatch({
                type: GET_ALL_PRODUCT_FILTER,
                data: data.products
            });
        } else {
            return dispatch({
                type: GET_ALL_PRODUCT_FILTER,
                data: data.products.filter(element => checked.includes(element.type))
            });
        }
    }

    catch (err) {
        console.error(err.message);
    }
};




export { 
    FetchApiProducts,
    PaginationChange,
    GetProductById,
    FetchApiProductTypes,
    GetAllFilterProducts
};

