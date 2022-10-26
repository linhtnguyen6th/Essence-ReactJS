import background_5 from "./img/bg-5.jpg";

function PromotionComponent () {
        return(
            <>
            {/* ##### CTA Area Start ##### */}
                <div className="cta-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cta-content bg-img background-overlay" style={{ backgroundImage: `url(${background_5})` }}>
                                    <div className="h-100 d-flex align-items-center justify-content-end">
                                        <div className="cta--text">
                                            <h6>up to 70%</h6>
                                            <h2>Global Sale</h2>
                                            <a href="/shop" className="btn essence-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ##### CTA Area End ##### --> */}
            </>
        );
    };

export default PromotionComponent;