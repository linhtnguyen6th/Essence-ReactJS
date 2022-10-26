import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import CheckOutArea from "./Content/checkout/CheckOutArea";


function CheckoutComponent () {
    return(
        <>
        <HeaderComponent />
        <BreadCrumbArea />
        <CheckOutArea />
        <FooterComponent />
        </>
    );
};

export default CheckoutComponent;