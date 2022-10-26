import WelcomeAreaComponent from "./welcome/WelcomeAreaComponent";
import TopCategoryComponent from "./topCategory/TopCategoryComponent";
import PromotionComponent from "./promotion/PromotionComponent";
import PopularProductComponent from "./popularProduct/PopularProductComponent";
import BrandsCollabComponent from "./brandsCollab/BrandsCollabComponent";


function ContentComponent () {
    return(
        <>  
            <WelcomeAreaComponent />
            <TopCategoryComponent />
            <PromotionComponent />
            <PopularProductComponent />
            <BrandsCollabComponent />
        </>
    );
};

export default ContentComponent;