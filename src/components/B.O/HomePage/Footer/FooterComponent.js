import logo2 from "./img/logo2.png";

function FooterComponent () {
    return(
        <>
            {/* ##### Footer Area Start ##### */}
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row">
                        { /* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area d-flex mb-30">
                                { /* Logo */}
                                <div className="footer-logo mr-50">
                                    <a href="/"><img src={logo2} alt="" /></a>
                                </div>
                                { /* Footer Menu */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="/shop">Shop</a></li>

                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        { /* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area mb-30">
                                <ul className="footer_widget_menu">
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Payment Options</a></li>
                                    <li><a href="#">Shipping and Delivery</a></li>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-end">
                        { /* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_heading mb-30">
                                    <h6>Subscribe</h6>
                                </div>
                                <div className="subscribtion_form">
                                    <form action="#" method="post">
                                        <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                        <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        { /* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_social_area">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa-brands fa-pinterest" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

        <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            { /* ##### Footer Area End ##### */}
            <a id="scrollUp" href="#top" style={{position: "fixed", zIndex: "2147483647", display: "block"}}>
                <i className="fa-solid fa-angle-up" aria-hidden="true"></i>
            </a>        
        </>
    );
};

export default FooterComponent;