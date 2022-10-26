function ContactArea () {
    return(
        <>
            {/* contact section starts */}
            <section className="contact-section section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">

                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                            noValidate="novalidate">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control m-0 mb-4" name="message"></textarea>
                                </div>
                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control m-0" />
                                </div>
                                <div className="col-md-6 mb-3 mt-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control m-0" />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control m-0" />
                                </div>
                                </div>
                                <div className="form-group mt-3">
                                    <a href="#" className="btn essence-btn">Send Message</a>
                                </div>
                        </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="fa-solid fa-house-user fa-xl pt-1"></i></span>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="fa-solid fa-mobile fa-xl pt-1"></i></span>
                                <div className="media-body">
                                    <h3>00 (440) 9865 562</h3>
                                    <p>Mon to Fri: 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="fa-solid fa-envelope fa-xl pt-1"></i></span>
                                <div className="media-body">
                                    <h3>support@essence.com</h3>
                                    <p>Feel free to message us at anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact section ends */}
    </>
    );
};

export default ContactArea;