import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import LoginArea from "./Content/login/LoginArea";



function Login () {
    return(
        <>
            <HeaderComponent/>
            <BreadCrumbArea/>
            <LoginArea/>
            <FooterComponent/>
        </>
    );
};

export default Login;