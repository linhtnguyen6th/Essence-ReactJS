import login from "./img/login.jpg";
//import firebase
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../../../../firebase";

//import react
import { useEffect, useState } from 'react';


const provider = new GoogleAuthProvider();


function LoginArea () {

    const [user, setUser] = useState(null);

    const loginGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // console.log(result);
            setUser(result.user);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const logoutGoogle = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                setUser(result);
            } else {
                setUser(null);
            }
        })
    }, [])

    
    return(
        <>
        {/* Login Box Area */}
            <section className="login_box_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login_box_img">
                                    <img className="img-fluid" src={login} alt=""/>
                                    {/* style={{height: "500px"}} */}
                                    <div className="hover">
                                        <h4>New to our website?</h4>
                                        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                                        {" "}
                                        {
                                            user ? 
                                            <> 
                                                <h4>Hi, {user.displayName}</h4>
                                                <img src={user.photoURL} style={{width: "50px", borderRadius: "50%"}} alt="user-avatar"></img>
                                                <br></br>
                                                <button className="btn essence-btn mt-4" onClick={logoutGoogle}><a href="/login">Sign out</a></button>
                                            </>
                                            :
                                            <button className="btn essence-btn" onClick={loginGoogle}><a href="/login">Sign in with Google</a></button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login_form_inner">
                                    <h3>Log in to enter</h3>
                                    <form className="row login_form" id="contactForm">
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Username" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="password" className="form-control" name="name" placeholder="Password" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account">
                                                <input type="checkbox" id="f-option2" name="selector" />
                                                <label htmlFor="f-option2">Keep me logged in</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <button className="btn essence-btn">Log In</button>
                                            <a href="/login">Forgot Password?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
	        {/* End Login Box Area */}
        </>
    );
};

export default LoginArea;