import related_product_1 from "./img/product-5.jpg";
import related_product_2 from "./img/product-6.jpg";
import related_product_3 from "./img/product-7.jpg";
import related_product_4 from "./img/product-8.jpg";
import related_product_5 from "./img/product-9.jpg";


function RelatedProducts () {
    return(
        <>
            { /* ##### Related Products Start ##### */ }
            <section className="new_arrivals_area section-padding-80 clearfix mt-0 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel owl-theme owl-loaded">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{transform: "translate3d(-1710px, 0px, 0px)", transition: "all 1s ease 0s", width: "3420px"}}>
                                        {/* owl-item-cloned 1 */}
                                        <div className="owl-item cloned" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_1} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_2} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Knot Front Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>
                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item-cloned 2 */}
                                        <div className="owl-item cloned" style={{width: "255px", marginRight: "30px"}}>
                                            { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_3} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_4} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Poplin Displaced Wrap Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item-cloned 3 */}
                                        <div className="owl-item cloned" style={{width: "255px", marginRight: "30px"}}>
                                            { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_3} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_4} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge offer-badge">
                                                        <span>-30%</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Crepe Wrap Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">
                                                        <span className="old-price">$75.00</span> $55.00
                                                    </p>
                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item-cloned 4 */}
                                        <div className="owl-item cloned" style={{width: "255px", marginRight: "30px"}}>
                                            { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_4} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_5} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge new-badge">
                                                        <span>New</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Belted Jumper Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item active 1 */}
                                        <div className="owl-item active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_1} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_2} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Knot Front Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item active 2 */}
                                        <div className="owl-item active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_2} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_3} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Poplin Displaced Wrap Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item active 3 */}
                                        <div className="owl-item active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_3} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_4} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge offer-badge">
                                                        <span>-30%</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Crepe Wrap Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">
                                                        <span className="old-price">$75.00</span> $55.00
                                                    </p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item active 4 */}
                                        <div className="owl-item active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_4} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_5} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge new-badge">
                                                        <span>New</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Belted Jumper Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item cloned active 1 */}
                                        <div className="owl-item cloned active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_1} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_2} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Knot Front Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item cloned active 2 */}
                                        <div className="owl-item cloned active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_2} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_3} alt="" />
                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>topshop</span>
                                                    <a href="/productdetails">
                                                        <h6>Poplin Displaced Wrap Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item cloned active 3 */}
                                        <div className="owl-item cloned active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_3} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_4} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge offer-badge">
                                                        <span>-30%</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Crepe Wrap Mini Dress</h6>
                                                    </a>
                                                    <p className="product-price">
                                                        <span className="old-price">$75.00</span> $55.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* owl-item cloned active 4 */}
                                        <div className="owl-item cloned active" style={{width: "255px", marginRight: "30px"}}>
                                        { /* Single Product */ }
                                            <div className="single-product-wrapper">
                                                { /* Product Image */ }
                                                <div className="product-img">
                                                    <img src={related_product_4} alt="" />
                                                    { /* Hover Thumb */ }
                                                    <img className="hover-img" src={related_product_5} alt="" />

                                                    { /* Product Badge */ }
                                                    <div className="product-badge new-badge">
                                                        <span>New</span>
                                                    </div>

                                                    { /* Favourite */ }
                                                    <div className="product-favourite">
                                                        <a href="#" className="favme fa fa-heart"></a>
                                                    </div>
                                                </div>
                                                { /* Product Description */ }
                                                <div className="product-description">
                                                    <span>mango</span>
                                                    <a href="/productdetails">
                                                        <h6>PETITE Belted Jumper Dress</h6>
                                                    </a>
                                                    <p className="product-price">$80.00</p>

                                                    { /* Hover Content */ }
                                                    <div className="hover-content">
                                                        { /* Buy Now */ }
                                                        <div className="add-to-cart-btn">
                                                            <a href="/shop" className="btn essence-btn">Buy Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-control">
                                    <div className="owl-nav">
                                        <div className="owl-prev" style={{display: "none"}}>prev</div>
                                        <div className="owl-next" style={{display: "none"}}>next</div>
                                    </div>
                                    <div className="owl-dots">
                                    </div>
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

export default RelatedProducts;