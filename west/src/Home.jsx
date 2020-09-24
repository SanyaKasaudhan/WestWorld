import React, { Component } from 'react'
import mobile from './image/mobile.png'
import './css/Home.css'
const Home = ( ) =>{
        return (<>
        <section id="header">
            <div className="col-lg-9 col-sm-11 mx-auto">
                <div className="row">
                    <div className="col-md-6 col-sm-7 pt-lg-5 pt-sm-2 order-1">
                        <h1 className="heading1">The Most Powerful Checking Account</h1>
                        <h4 className="heading2 mt-4">
                                Our checking account gives you higher returns than a savings account with no hidden fees.
                        </h4>

                        <div className="div1 mt-5">
                            <form>
                            <img className="msg" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg"/>
                            <div class="fake-input">
                            <input type="email" placeholder="Enter Email Address" required/>
                            </div>
                            <div className="join">
                            <a href="https://google.com" className="button1 ml-4" >Join Now</a>
                            </div>
                            </form>
                        </div>
                        <div className="row">
                        <div className="col mx-auto">
                        <img className="msg" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png"/>
                        </div>
                        <div className="col-lg-11 mt-0 ml-0">
                        <p className="ml-5 para">283 spots left for Priority Access</p>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-lg-4">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png" height="55px" alt="Google Play" />
                        </div>
                        <div className="col-lg-4">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" height="55px" alt="Apple Play" />
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mt-5 header-img">
                    <img src={mobile} className="img-fluid animated" />
                    </div>
                </div>
            </div>




        </section>


        </>
           

        );
   
}
export default Home;