import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import ContactArea from "./Content/contactarea/ContactArea";

function ContactComponent () {
    return(
        <>
            <HeaderComponent/>
            <BreadCrumbArea/>
            <ContactArea/>
            <FooterComponent/>
        </>
    );
};

export default ContactComponent;