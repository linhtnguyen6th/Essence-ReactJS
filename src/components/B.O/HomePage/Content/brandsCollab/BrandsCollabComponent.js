import brand_1 from "./img/brand1.png";
import brand_2 from "./img/brand2.png";
import brand_3 from "./img/brand3.png";
import brand_4 from "./img/brand4.png";
import brand_5 from "./img/brand5.png";
import brand_6 from "./img/brand6.png";


function BrandsCollabComponent () {
    return(
        <>
            { /* ##### Brands Area Start ##### */ }
                <div className="brands-area d-flex align-items-center justify-content-between">
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_1} alt="" />
                    </div>
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_2} alt="" />
                    </div>
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_3} alt="" />
                    </div>
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_4} alt="" />
                    </div>
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_5} alt="" />
                    </div>
                    { /* Brand Logo */ }
                    <div className="single-brands-logo">
                        <img src={brand_6} alt="" />
                    </div>
                </div>
            { /* ##### Brands Area End ##### */ }
        </>
    );
};

export default BrandsCollabComponent;