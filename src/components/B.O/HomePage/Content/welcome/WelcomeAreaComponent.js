import background from "./img/bg-1.jpg";

function WelcomeAreaComponent () {
    return(
        <>
             {/* ##### Welcome Area Start #####  */}
            <section className="welcome_area bg-img background-overlay" style={{backgroundImage: `url(${background})`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>essence</h6>
                                <h2>New In-store</h2>
                                <a href="/shop" className="btn essence-btn">view collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* ##### Welcome Area End #####  */}
        </>
    );
};

export default WelcomeAreaComponent;