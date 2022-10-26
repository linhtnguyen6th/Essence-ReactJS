//import component
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import ContentComponent from "./Content/ContentComponent";



function HomePageComponent () {
    return(
        <>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader"></div>
            </div>
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent />
        </>
    );
};

export default HomePageComponent;