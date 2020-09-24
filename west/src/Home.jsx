import React, { Component } from 'react'
import mobile from './image/mobile.png'
import './css/Home.css'
const Home = ( ) =>{
        return (<>
        <section id="header pl-sm-5">
            <div className="col-lg-9 col-sm-11 mx-auto">
                <div className="row">
                    <div className="col-md-6 col-sm-7 pt-lg-5 pt-sm-2 order-1 justify-content-md-center">
                        <h1 className="heading1 justify-content-md-center">The Most Powerful Checking Account</h1>
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
                        <div className="col-lg-4
                        ">
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
            <div className="backed mt-5 ml-sm-5  d-flex justify-content-center">
                <h5>BACKED BY THE BEST</h5>
            </div>


            <div class="container">
            <div class="row mt-5 justify-content-lg-center">
                <div class="col-md-6 col-sm-12 order-1 order-lg-1 col-lg-3 mt-4 ml-sm-5 pl-sm-5 ">
                <img className="seq img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt="sequioa-image"></img>
                </div>
                <div class="col-md-6 col-sm-12 order-2 order-lg-2 col-lg-3">
                <img className="poly img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt="Polychain Capital" />
                </div>
                <div class="col-md-6 col-sm-12 mt-3 order-3 order-lg-3 col-lg-3">
                <img className="cons img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt="Consensys"/>
                </div>
            </div>
            </div>


            <div className="row">
                    <div className="col-md-7 col-sm-7 pt-lg-5 pt-sm-2 order-1 justify-content-md-center">
                        <div className="save">
                        Start saving for a rainy day fund
                        </div>
                        <h1 className="head1 mt-3 justify-content-md-center">Use Our Checking Account to Achieve Your Financial Goals</h1>
                        <h4 className="head2 mt-4">
                        With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. 
                        OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. 
                        Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</h4>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 mt-5 header-img">
                    <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" className="img-fluid animated" />
                    </div>
            </div>


            <div className="mt-5 ml-sm-5  d-flex justify-content-center">
                <h1 className="early">Sign up early to save more</h1>
            </div>
            <div className="col-lg-8 col-sm-11 mx-auto">
            <div className="ml-sm-5  d-flex justify-content-center">
                <h1 className="early1">Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</h1>
            </div>
            </div>


            </div>
        </section>
        </>
           
 
        );
   
}
export default Home;