import {
    Pagination,
    Grid
} from "@mui/material";


//import react, react-redux 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//import function action types
import { FetchApiProducts, PaginationChange, GetAllFilterProducts, FetchApiProductTypes } from "../../../../../actions/FetchApiActionTypes";
import { productNameChangeHandler, minPromoPriceChangeHandler, maxPromoPriceChangeHandler, productTypeChangeHandler, clearInput } from "../../../../../actions/FilterProductsActionTypes";


//import navigate
import { useNavigate } from "react-router-dom";




function SingleWidget () {


    //Call API 
    //Xử lý reload page
    const [reloadPage, setReloadPage] = useState(0);
    const [checked, setChecked] = useState([]);

    const dispatch = useDispatch();

    const { productsList, noPage, currentPage } = useSelector((reduxData) => reduxData.GetProductsReducers);
    const { productNameInput, minPromoPriceInput, maxPromoPriceInput, productTypeSelect } = useSelector((reduxData) => reduxData.FilterProductsReducer);
    const { productType } = useSelector((reduxData) => reduxData.GetAllProductTypesReducers);



    //Khai báo hàm xử lý sự kiện change page
    const changePageHandler = (event, value) => {
        dispatch(PaginationChange(value)); // value = số trang user click khi chuyển trang (1,2,3...)
    };

    useEffect(() => {
        dispatch(GetAllFilterProducts(productNameInput, minPromoPriceInput, maxPromoPriceInput, productTypeSelect));
        
        //get all product types
        dispatch(FetchApiProductTypes());
    }, [currentPage, reloadPage]);


    const navigate = useNavigate();


    //Khai báo hàm xử lý sự kiện cho nút view, truyền giá trị productId
    const onBtnSeeDetails = (productId) => {
        // navigate theo route đã khai báo tại app.js, truyền vào giá trị của productId
        navigate(`/shop/${productId}`);
    };


    //Xử lý sự kiện onChange của product name
    const productNameChange = (event) => {
        
        dispatch(productNameChangeHandler(event.target.value));
    };

    //Xử lý sự kiện onChange của min price
    const minPriceChange = (event) => {

        dispatch(minPromoPriceChangeHandler(event.target.value));
    };

    //Xử lý sự kiện onChange của max price
    const maxPriceChange = (event) => {

        dispatch(maxPromoPriceChangeHandler(event.target.value));
    };


    //Xử lý sự kiện onChange của product type
    const productTypeCheck = (value) => {
        setChecked (prev => {
            const isChecked = checked.includes(value);
            if(isChecked) {
                return checked.filter(item => item !== value)
                } else {
                return [...prev, value];
                }
            })
    };

    //Xử lý sự kiện cho nút filter
    const onBtnFilterClick = () => {
        dispatch(GetAllFilterProducts(productNameInput, minPromoPriceInput, maxPromoPriceInput, checked));
        dispatch(productTypeChangeHandler(checked));
    };




    //khai báo hàm xử lý sự kiện onload
    const refreshPage = () => {
        setReloadPage (reloadPage + 1);
    };




    return(
        <>
                <div className="col-12 col-md-4 col-lg-3">
                    <div className="shop_sidebar_area">                       
                        { /* Brands Filter */ }
                        <div className="widget brands mb-50">
                            { /* Widget Title */ }
                            <h6 className="widget-title mb-30">Filter by</h6>
                            { /* Widget Title 2 */ }
                            {/* <p className="widget-title2 mb-15">Brands</p>
                            <div className="widget-desc">
                                <ul>
                                    <li><a href="#">Mango</a></li>
                                    <li><a href="#">River Island</a></li>
                                    <li><a href="#">Topshop</a></li>
                                    <li><a href="#">Zara</a></li>
                                </ul>
                            </div> */}
                        </div>
                        { /* Product Filter */ }
                        <div className="widget brands mb-50">
                            { /* Widget Title 2 */ }
                            <p className="widget-title2 mb-15">Product</p>
                            <div className="row">
                                <input className="form-control" type="text" id="product-filter" value={productNameInput} onChange={productNameChange}/>
                            </div>
                        </div>
                        { /* Price Filter */ }
                        <div className="widget price mb-50">
                            { /* Widget Title 2 */ }
                            <p className="widget-title2 mb-15">Price</p>
                            <div className="row">
                                <input className="form-control" type="text" name="category" id="price-filter1" placeholder="from" value={minPromoPriceInput} onChange={minPriceChange}></input> {" "}
                                <input className="form-control" type="text" name="category" id="price-filter2" placeholder="to" tabIndex={1} value={maxPromoPriceInput} onChange={maxPriceChange}></input>
                            </div>
                        </div>
                        { /* ##### Single Widget ##### */ }
                        <div className="widget brands mb-50">
                            { /* Product Type Filter */ }
                            <p className="widget-title2 mb-15">Product Type</p>
                            <form action="#">
                                <div className="widget-desc">
                                    <ul>
                                        {
                                            productType.map((element, index) => {
                                                return(
                                                    <li className="filter-list" key={index}>
                                                        <input 
                                                            className="pixel-radio" 
                                                            type="checkbox"  
                                                            value={element.name} 
                                                            onChange={() => productTypeCheck(element._id)}
                                                            checked={checked.includes(element._id)}
                                                        />
                                                        <label htmlFor={element.name}>{element.name}</label>
                                                    </li> 
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </form>
                        </div>
                        { /* Filter button */ }
                        <div className="widget price mb-50">
                            <div className="col-12">
                                <button className="btn essence-btn text-center" onClick={onBtnFilterClick}>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* Products List */}
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="shop_grid_product_area">
                        <div className="row">
                            { /* Single Product */ }
                                {
                                productsList.length !== 0 ? productsList.map((element, index) => {
                                    return  (
                                            <div className="col-12 col-sm-6 col-lg-4" key={index}>
                                                <div className="single-product-wrapper">
                                                    { /* Product Image */ }
                                                    <div className="product-img">
                                                        <img src={element.imageUrl} alt="" />
                                                        { /* Favourite */ }
                                                        <div className="product-favourite">
                                                            <a href="#" className="favme fa fa-heart"></a>
                                                        </div>
                                                    </div>
                                                    { /* Product Description */ }
                                                    <div className="product-description">
                                                        <span>{element.brand}</span>
                                                        <a href={`http://localhost:3000/${element._id}`}>
                                                            <h6>{element.name}</h6>
                                                        </a>
                                                        <p className="product-price"><span className="old-price">{element.buyPrice}</span> {element.promotionPrice}</p>
                                                        { /* Hover Content */ }
                                                        <div className="hover-content">
                                                            { /* See Details */ }
                                                            <div className="add-to-cart-btn">
                                                                <a href={`http://localhost:3000/${element._id}`} className="btn essence-btn">See Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                                :
                                <p>No matching founds</p>
                            }
                        {/* Single Product ends */}
                        </div>
                    </div>
                    {/* Pagination */}
                    {
                        noPage !== 0 
                        ?
                        <>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Pagination  count={noPage} defaultPage={currentPage} onChange={changePageHandler} variant="outlined" color="primary" sx={{display: "block"}}></Pagination>
                                </Grid>
                            </Grid>
                        </> 
                        :
                        <>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Pagination  count={noPage} defaultPage={currentPage} onChange={changePageHandler} variant="outlined" color="primary" sx={{display: "none"}}></Pagination>
                            </Grid>
                        </Grid>
                        </> 
                    }
                </div>
        </>
    );
};

export default SingleWidget;