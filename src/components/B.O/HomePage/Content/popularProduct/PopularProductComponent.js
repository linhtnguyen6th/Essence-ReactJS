import product_1 from "./img/product-1.jpg";
import product_2 from "./img/product-2.jpg";
import product_3 from "./img/product-3.jpg";
import product_4 from "./img/product-4.jpg";
import product_5 from "./img/product-5.jpg";

//import function action types
import { FetchApiProducts } from "../../../../../actions/FetchApiActionTypes";

//import navigate
import { useNavigate } from "react-router-dom";

//import react, react-redux 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PopularProductComponent () {

    //Call API 
    const [reloadPage, setReloadPage] = useState(0);

    const { products } = useSelector((reduxData) => reduxData.GetProductsReducers);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchApiProducts(8));
    }, [reloadPage]);



    const navigate = useNavigate();


    //Khai báo hàm xử lý sự kiện cho nút buy now, lấy productId
    const onBtnBuyNowClick = (productId) => {
        navigate(`/${productId}`);
    };


    return (
        <>
            { /* ##### Popular products Area Start ##### */ }
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    { /* Single Product */ }
                                        {
                                        products.map((element, index) => {
                                            return  (
                                                    <div className="col-12 col-sm-6 col-lg-3" key={index}>
                                                        <div className="single-product-wrapper">
                                                            { /* Product Image */ }
                                                            <div className="product-img">
                                                                <img src={element.imageUrl} alt="" />

                                                                {/* <div className="product-badge offer-badge">
                                                                    <span>-30%</span>
                                                                </div> */}
                                                                { /* Favourite */ }
                                                                <div className="product-favourite">
                                                                    <a href="#" className="favme fa fa-heart"></a>
                                                                </div>
                                                            </div>
                                                            { /* Product Description */ }
                                                            <div className="product-description">
                                                                <span>{element.brand}</span>
                                                                <a href="" onClick={() => onBtnBuyNowClick(element._id)}>
                                                                    <h6>{element.name}</h6>
                                                                </a>
                                                                <p className="product-price"><span className="old-price">{element.buyPrice}</span> {element.promotionPrice}</p>
                                                                { /* Hover Content */ }
                                                                <div className="hover-content">
                                                                    { /* Add to Cart */ }
                                                                    <div className="add-to-cart-btn">
                                                                        <a href="" onClick={() => onBtnBuyNowClick(element._id)} className="btn essence-btn">See Details</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                {/* Single Product ends */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            { /* ##### Popular products Area End ##### */ }
        </>
    );
};

export default PopularProductComponent;