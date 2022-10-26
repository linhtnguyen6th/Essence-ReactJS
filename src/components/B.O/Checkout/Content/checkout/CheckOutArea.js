

function CheckOutArea () {
    return(
        <>
            { /* ##### Checkout Area Start ##### */ }
            <div className="checkout_area section-padding-80">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="checkout_details_area mt-50 clearfix">

                                <div className="cart-page-heading mb-30">
                                    <h5>Billing Address</h5>
                                </div>

                                <form>
                                {/* action="#" method="post" */}
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="first_name">First Name <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="first_name" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="last_name">Last Name <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="last_name" required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="company">Company Name</label>
                                            <input type="text" className="form-control m-0" id="company" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="country">Country <span>*</span></label>
                                            <select className="nice-select w-100" id="country" >
                                                <option value="usa">United States</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="ger">Germany</option>
                                                <option value="fra">France</option>
                                                <option value="ind">India</option>
                                                <option value="aus">Australia</option>
                                                <option value="bra">Brazil</option>
                                                <option value="cana">Canada</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="street_address">Address <span>*</span></label>
                                            <input type="text" className="form-control mb-3 m-0" id="street_address" />
                                            <input type="text" className="form-control m-0" id="street_address2" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="postcode">Postcode <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="postcode" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="city">Town/City <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="city" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="state">Province <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="state" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="phone_number">Phone No <span>*</span></label>
                                            <input type="text" className="form-control m-0" id="phone_number" min="0" />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="email_address">Email Address <span>*</span></label>
                                            <input type="email" className="form-control m-0" id="email_address" />
                                        </div>

                                        <div className="col-12">
                                            <div className="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Terms and conditions</label>
                                            </div>
                                            <div className="custom-control custom-checkbox d-block mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Create an account</label>
                                            </div>
                                            <div className="custom-control custom-checkbox d-block">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">Subscribe to our newsletter</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                            <div className="order-details-confirmation">

                                <div className="cart-page-heading">
                                    <h5>Your Order</h5>
                                    
                                </div>

                                <ul className="order-details-form mb-4">
                                    <li><span>Product</span> <span>Total</span></li>
                                    <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                                    <li><span>Subtotal</span> <span>$59.90</span></li>
                                    <li><span>Shipping</span> <span>Free</span></li>
                                    <li><span>Total</span> <span>$59.90</span></li>
                                </ul>

                                <div id="accordion" role="tablist" className="mb-4">
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <h6 className="mb-0">
                                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i className="fa-regular fa-circle"></i>&nbsp; Paypal</a>
                                            </h6>
                                        </div>

                                        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa-regular fa-circle"></i>&nbsp; cash on delievery</a>
                                            </h6>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa-regular fa-circle"></i>&nbsp; credit card</a>
                                            </h6>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingFour">
                                            <h6 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><i className="fa-regular fa-circle"></i>&nbsp; direct bank transfer</a>
                                            </h6>
                                        </div>
                                        <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="btn essence-btn">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* ##### Checkout Area End ##### */ }
        </>
    );
};

export default CheckOutArea;