import React, { Component } from 'react'
import mobile from './image/mobile.png'
import './css/Home.css'
const Home = ( ) =>{
        return (<>
        <section id="header" className="">
            <div className="container-fluid nav-bg mt-lg-23 mt-sm-4">
                <div className="row">
                    <div className="col-lg-9 col-sm-11 mx-auto">

                        {// most powerful section 
                        }
                        <div className="row">
                        <div className="col-md-6 col-sm-7 pt-5 pt-lg-0 pt-sm-0 order-1 ">
                            <h1>The Most Powerful Checking Account</h1>
                            <h4 className="my-3">
                                Our checking account gives you higher returns than a savings account with no hidden fees.
                            </h4>
                            <div className="mt-3">
                            <img className="hsg" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" alt="email" />
                            <form>
                                <div className="inputWithIcon">
                                    <input type="email" placeholder="Enter Email Address"/>
                                    <img className="hsg" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" alt="email" />
                            
                                </div>
                            </form>
                            </div>
                        </div>

                        {// add image
                        }
                        <div className="col-md-6 col-sm-5 pt-5 pt-lg-0 order-2  mobile-img">
                            <img src={mobile} className="img-fluid animated" alt="mobile"/>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        </>
           

        );
   
}
export default Home;