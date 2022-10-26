import RelatedProducts from "../relatedproducts/RelatedProducts";

//import react, react-redux 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";


//import action types
import { GetProductById } from "../../../../../actions/FetchApiActionTypes";


function SingleProductDetails () {

    const [reloadPage, setReloadPage] = useState(0);

    const { productId } = useParams();

    const onBtnIncreaseClick = () => {
        var result = document.getElementById("qty");
        var count = result.value;
        if (!isNaN(count)) {
            result.value++;
            return false;
        };
    };

    const onBtnDecreaseClick = () => {
        var result = document.getElementById("qty");
        var count = result.value;
        if (!isNaN(count) && count > 0) {
            result.value--;
            return false;
        };
    };

    const { productDetails } = useSelector((reduxData) => reduxData.GetProductsReducers);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProductById(productId));
    }, [productId]);



    return(
        <>
        {/* Product details starts */}
        <section className="single_product_details_areas sections_padding_0_100">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6">
                        <div className="single_product_thumbs">
                            
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a className="gallery_img" href="#" >
                                            <img className="d-block w-100" src={productDetails.imageUrl} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="single_product_descs">
                            <h6 className="brand mt-2 pt-2">{productDetails.brand}</h6>
        
                            <h4 className="title">{productDetails.name}</h4>

                            <p className="available">Available: <span className="text-muted">In Stock</span></p>

                            <div className="single_product_ratings">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa-regular fa-star" aria-hidden="true"></i>
                            </div>

                            <p className="product-price" style={{fontSize: "17px", color: "#000000", fontWeight: "700", marginBottom: "0px"}}>
                                <span className="old-price" style={{textDecoration: "line-through", fontSize: "15px", color: "#aaaaaa", fontWeight: "700", marginRight: "5px"}}>{productDetails.buyPrice}</span> 
                            {productDetails.promotionPrice}
                            </p>

                            <div className="widget size" style={{marginBottom: "20px"}}>
                                <h6 className="widget-title" style={{fontSize: "14px", marginBottom: "4px", marginTop: "40px"}}>Size</h6>
                                <div className="widget-desc">
                                    <select className="form-control w-25 ml-0">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                            </div>

                            {/* Add to Cart Form */}
                            <section className="cart clearfix mb-50 d-flex">
                                <div className="quantity">
                                    <button onClick={onBtnIncreaseClick} className="qty-plus"><i className="fa-solid fa-plus fa-md" style={{marginTop: "13px"}}></i></button>
                                    <input type="number" className="qty-text form-control ml-0" id="qty" maxLength="12" name="quantity" value="1" readOnly/>
                                    <button onClick={onBtnDecreaseClick} className="qty-minus"><i className="fa-solid fa-minus fa-md" style={{paddingTop: "10px"}}></i></button>
                                </div>
                                <a href="/cart" className="btn essence-btn" style={{marginLeft: "20px"}}>Add to cart</a>
                            </section>

                            <div id="accordion" role="tablist">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h6 className="mb-0">
                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Description</a>
                                        </h6>
                                    </div>

                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>{productDetails.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h6 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cart Details</a>
                                        </h6>
                                    </div>
                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree">
                                        <h6 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">shipping &amp; Returns</a>
                                        </h6>
                                    </div>
                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Product details ends */}

        {/* Related products starts */}
            <RelatedProducts/>
        </>  
    );
};

export default SingleProductDetails;