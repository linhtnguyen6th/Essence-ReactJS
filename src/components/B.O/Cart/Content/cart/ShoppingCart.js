import product_details_1 from "./img/product-big-1.jpg";
import product_details_2 from "./img/product-big-2.jpg";

function ShoppingCart() {
    return(
        <>
                {/* Cart starts */}
                <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 ftco-animate">
                        <div className="cart-list">
                            <table className="table">
                                <thead className="thead-primary">
                                <tr className="text-center">
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-center">
                                    <td className="product-remove"><a href="#"><i className="fa-solid fa-xmark fa-sm"></i></a></td>
                                    
                                    <td className="image-prod"><div className="img" style={{ backgroundImage: `url(${product_details_1})` }}></div></td>
                                    
                                    <td className="product-name">
                                        <h3>Mango</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </td>
                                    
                                    <td className="price">$4.90</td>
                                    
                                    <td className="quantity">
                                        <div className="input-group mb-3">
                                            <input type="text" name="quantity" className="quantity form-control input-number"  min="1" max="100" />
                                        </div>
                                    </td>
                                    
                                    <td className="total">$4.90</td>
                                </tr>
                                {/* END TR */}

                                <tr className="text-center">
                                    <td className="product-remove"><a href="#"><i className="fa-solid fa-xmark fa-sm"></i></a></td>
                                    
                                    <td className="image-prod"><div className="img" style={{ backgroundImage: `url(${product_details_2})`}}></div></td>
                                    
                                    <td className="product-name">
                                        <h3>Topshop</h3>
                                        <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                                    </td>
                                    
                                    <td className="price">$15.70</td>
                                    
                                    <td className="quantity">
                                        <div className="input-group mb-3">
                                            <input type="text" name="quantity" className="quantity form-control input-number" min="1" max="100" />
                                        </div>
                                    </td>
                                    <td className="total">$15.70</td>
                                </tr>
                                {/* END TR */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
                        <div className="cart-total mb-3">
                            <h3>Cart Totals</h3>
                            <p className="d-flex">
                                <span>Subtotal</span>
                                <span>$20.60</span>
                            </p>
                            <p className="d-flex">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </p>
                            <p className="d-flex">
                                <span>Discount</span>
                                <span>$3.00</span>
                            </p>
                            <hr/>
                            <p className="d-flex total-price">
                                <span><strong>Total</strong></span>
                                <span>$17.60</span>
                            </p>
                        </div>
                        <p className="text-center my-5"><a href="/checkout" className="btn essence-btn">Proceed to Checkout</a></p>
                    </div>
                </div>
                </div>
                </section>
        </>
    );
};

export default ShoppingCart;