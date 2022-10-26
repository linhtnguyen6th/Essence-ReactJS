import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import SingleProductDetails from "./Content/singleproductdetails/SingleProductDetails";



function ProductDetailsComponent () {
    return (
        <>
            <HeaderComponent />
            <BreadCrumbArea />
            <SingleProductDetails />
            <FooterComponent />
        </>
    );
};

export default ProductDetailsComponent;