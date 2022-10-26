import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import SingleWidget from "./Content/singlewidget/SingleWidget";

function ShopComponent () {
    return(
        <>
            <HeaderComponent />
            <BreadCrumbArea />
            {/* Shop Grid Area Starts ##### */}
            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">
                            <SingleWidget />
                    </div>    
                </div>            
            </section>
            {/* Shop Grid Area End ##### */}
            <FooterComponent />
        </>
    );
};

export default ShopComponent;