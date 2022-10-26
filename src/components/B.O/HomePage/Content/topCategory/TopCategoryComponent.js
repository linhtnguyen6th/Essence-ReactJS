import background_2 from "./img/bg-2.jpg";
import background_3 from "./img/bg-3.jpg";
import background_4 from "./img/bg-4.jpg";

function TopCategoryComponent () {

    return(
        <>
        {/* ##### Top Catagory Area Start #####  */}
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Single Catagory  */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: `url(${background_2})`}}>
                                <div className="catagory-content">
                                    <a href="/shop">Clothing</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Catagory  */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: `url(${background_3})`}}>
                                <div className="catagory-content">
                                    <a href="/shop">Shoes</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Catagory  */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: `url(${background_4})`}}>
                                <div className="catagory-content">
                                    <a href="/shop">Accessories</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Top Catagory Area End ##### */}
        </>
    );
};

export default TopCategoryComponent;