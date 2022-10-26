import HeaderComponent from "../HomePage/Header/HeaderComponent";
import FooterComponent from "../HomePage/Footer/FooterComponent";
import BreadCrumbArea from "./Content/breadcrumb/BreadCrumbArea";
import BlogWrapper from "./Content/blogwrapper/BlogWrapper";

function BlogComponent () {
    return(
        <>
            <HeaderComponent/>
            <BreadCrumbArea/>
            <BlogWrapper/>
            <FooterComponent/>
        </>
    );
};

export default BlogComponent;