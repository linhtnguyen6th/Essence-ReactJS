import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import ShoppingCart from "./Content/cart/ShoppingCart";

function CartComponent () {
    return(
        <>
            <HeaderComponent/>
            <BreadCrumbArea/>
            <ShoppingCart/>
            <FooterComponent/>
        </>
    );
};

export default CartComponent;