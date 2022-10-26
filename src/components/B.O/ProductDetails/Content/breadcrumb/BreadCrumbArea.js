import breadCrumbImg from "./img/breadcumb.jpg"


function BreadCrumbArea () {
    return(
        <>
            {/* ##### Breadcumb Area Start ##### */}
            <div className="breadcumb_area bg-img" style={{ backgroundImage: `url(${breadCrumbImg})`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center" style={{paddingTop: "6rem", marginTop: "5rem"}}>
                                <h2>Product Details</h2>
                                <div className="row" style={{justifyContent: "end", paddingTop: "40px"}}>
                                    <a className="breadcrumb active" href="/" style={{paddingRight: "4px", fontSize: "15px"}}>Home / </a>
                                    <a className="breadcrumb" href="/productdetails" style={{paddingLeft: "0px", fontSize: "15px"}}>Product details</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ##### Breadcumb Area End ##### */}
        </>
    );
};

export default BreadCrumbArea;