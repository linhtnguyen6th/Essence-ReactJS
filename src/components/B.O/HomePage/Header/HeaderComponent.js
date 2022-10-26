//import images
import logo from "../../../../assets/images/core-img/logo.png";
import background_6 from "../../../../assets/images/bg-img/bg-6.jpg";
import product_1 from "../../../../assets/images/product-img/product-1.jpg";
import product_2 from "../../../../assets/images/product-img/product-2.jpg";
import product_3 from "../../../../assets/images/product-img/product-3.jpg";
//import firebase
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../../../firebase";

//import react
import { useEffect, useState } from 'react';

const provider = new GoogleAuthProvider();


function HeaderComponent () {


    // const [user, setUser] = useState(null);

    // const loginGoogle = () => {
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // console.log(result);
    //         setUser(result.user);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    // };

    // const logoutGoogle = () => {
    //     signOut(auth)
    //     .then(() => {
    //         setUser(null);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    // };
    
    // useEffect(() => {
    //     onAuthStateChanged(auth, (result) => {
    //         if (result) {
    //             setUser(result);
    //         } else {
    //             setUser(null);
    //         }
    //     })
    // }, []);



    return(
        <>
    {/* ##### Header Area Start ##### */}
    <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
            {/* Classy Menu  */}
            <nav className="classy-navbar" id="essenceNav">
                {/* Logo  */}
                <a className="nav-brand" href="/"><img src={logo} alt="logo" /></a>
                {/* Navbar Toggler  */}
                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                </div>
                {/* Menu  */}
                <div className="classy-menu">
                    {/* close button  */}
                    <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                    </div>
                    {/* Nav Start  */}
                    <div className="classynav">
                        <ul>
                            <li className="megamenu-item"><a href="/shop">Shop</a>
                                <div className="megamenu">
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Women's Collection</li>
                                        <li><a href="/shop">Dresses</a></li>
                                        <li><a href="/shop">Blouses &amp; Shirts</a></li>
                                        <li><a href="/shop">T-shirts</a></li>
                                        <li><a href="/shop">Rompers</a></li>
                                        <li><a href="/shop">Bras &amp; Panties</a></li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Men's Collection</li>
                                        <li><a href="/shop">T-Shirts</a></li>
                                        <li><a href="/shop">Polo</a></li>
                                        <li><a href="/shop">Shirts</a></li>
                                        <li><a href="/shop">Jackets</a></li>
                                        <li><a href="/shop">Trend</a></li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Kid's Collection</li>
                                        <li><a href="/shop">Dresses</a></li>
                                        <li><a href="/shop">Shirts</a></li>
                                        <li><a href="/shop">T-shirts</a></li>
                                        <li><a href="/shop">Jackets</a></li>
                                        <li><a href="/shop">Trend</a></li>
                                    </ul>
                                    <div className="single-mega cn-col-4">
                                        <img src={background_6} alt=""/>
                                    </div>
                                </div>
                                <span className="dd-trigger"></span>
                                <span className="dd-arrow"></span>
                            </li>
                            <li className="megamenu-item cn-dropdown-item has-down pr12">
                                <a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/shop">Shop</a></li>
                                        <li><a href="/cart">Cart</a></li>
                                        <li><a href="/checkout">Checkout</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/singleblog">Single Blog</a></li>
                                        <li><a href="/regularpage">Regular Page</a></li>
                                    </ul>
                            </li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* Nav End  */}
                </div>
            </nav>

            {/* Header Meta Data  */}
            <div className="header-meta d-flex clearfix justify-content-end">
                {/* Search Area  */}
                <div className="search-area">
                    <form action="#" method="post">
                        <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                {/* Favourite Area  */}
                <div className="favourite-area">
                    <a href="#"><i className="fa-solid fa-heart fa-lg"></i></a>
                </div>
                {/* User Login Info  */}
                <div className="user-login-info">
                    <a href="/login"><i className="fa-solid fa-user fa-lg"></i></a>
                </div>
                {/* Cart Area  */}
                <div className="cart-area">
                    <a href="/cart" id="essenceCartBtn"><i className="fa-solid fa-cart-shopping fa-lg"></i><span>3</span></a>
                </div>
            </div>
        </div>
    </header>
    {/* ##### Header Area End #####  */}

    {/* ##### Right Side Cart Area #####  */}
    <div className="cart-bg-overlay"></div>

    <div className="right-side-cart-area">

        {/* Cart Button  */}
        <div className="cart-button">
            <a href="#" id="rightSideCart"><i className="fa-solid fa-cart-shopping fa-lg"></i><span>3</span></a>
        </div>

        <div className="cart-content d-flex" style={{overflow: "hidden", outline: "none"}} tabIndex="1">

            {/* Cart List Area  */}
            <div className="cart-list" style={{overflow: "hidden", outline: "none"}} tabIndex="2">
                {/* Single Cart Item  */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src={product_1} className="cart-thumb" alt="" />
                        {/* Cart Item Desc  */}
                        <div className="cart-item-desc">
                        <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>

                {/* Single Cart Item  */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src={product_2} className="cart-thumb" alt="" />
                        {/* Cart Item Desc  */}
                        <div className="cart-item-desc">
                            <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>

                {/* Single Cart Item  */}
                <div className="single-cart-item">
                    <a href="#" className="product-image">
                        <img src={product_3} className="cart-thumb" alt="" />
                        {/* Cart Item Desc  */}
                        <div className="cart-item-desc">
                            <span className="product-remove"><i className="fa fa-close" aria-hidden="true"></i></span>
                            <span className="badge">Mango</span>
                            <h6>Button Through Strap Mini Dress</h6>
                            <p className="size">Size: S</p>
                            <p className="color">Color: Red</p>
                            <p className="price">$45.00</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Cart Summary  */}
            <div className="cart-amount-summary">

                <h2>Summary</h2>
                <ul className="summary-table">
                    <li><span>subtotal:</span> <span>$274.00</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>discount:</span> <span>-15%</span></li>
                    <li><span>total:</span> <span>$232.00</span></li>
                </ul>
                <div className="checkout-btn mt-100">
                    <a href="/checkout" className="btn essence-btn">check out</a>
                </div>
            </div>
        </div>
    </div>
    {/* ##### Right Side Cart End #####  */}
    </>
    );
};

export default HeaderComponent;