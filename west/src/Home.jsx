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
                            <div className="fake-input">
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

                
            {/* backed */}
            <div className="backed mt-5 ml-sm-5  d-flex justify-content-center">
                <h5>BACKED BY THE BEST</h5>
            </div>

            
            {/* company logo*/}
            <div className="container">
            <div className="row mt-5 justify-content-lg-center">
                <div className="col-md-6 col-sm-12 order-1 order-lg-1 col-lg-3 mt-4 ml-sm-5 pl-sm-5 ">
                <img className="seq img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" alt="sequioa-image"></img>
                </div>
                <div className="col-md-6 col-sm-12 order-2 order-lg-2 col-lg-3">
                <img className="poly img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" alt="Polychain Capital" />
                </div>
                <div className="col-md-6 col-sm-12 mt-3 order-3 order-lg-3 col-lg-3">
                <img className="cons img-fluid animated" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" alt="Consensys"/>
                </div>
            </div>
            </div>

            
            {/* start saving */}
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

            
            {/* signup earyly content*/}
            <div className="mt-5 ml-sm-5  d-flex justify-content-center">
                <h1 className="early">Sign up early to save more</h1>
            </div>
            <div className="col-lg-8 col-sm-11 mx-auto">
            <div className="ml-sm-5  d-flex justify-content-center">
                <h1 className="early1">Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</h1>
            </div>
            </div>

            
            {/* card down headings */}
    <div className="row mt-5">
        <div className="col-lg-4">
            <div className="card w-full block rounded-10">
                    <div className="card1 w-full block rounded-10">
                        
                        <div className="relative bottom-24">
                            <img className="credit" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" alt="card"></img>
                
                                <p className="metal">
                                                METAL
                                </p>

                                <p className="sup">
                                    <span className="text-juno-blue">
                                        2.15%
                                    </span> 
                                    <span className="sup1">
                                        1
                                    </span>
                                </p>
                                <p className="cash">
                                    <span className="cash1">
                                                    5%
                                    </span> 
                                
                                    <span className="cash2">
                                                    cash back
                                    </span>
                                </p>
                        </div>
                    </div>
            
                    {/* progress bar top */}
                    <div className="prog">
                        <p>
                            <span className="num1"> 2217</span>
                            <span className="num2">/ 2500</span>
                            <span className="num3"> spots</span>
                            <span className="num4 flex-end">
                                <span className="font-bold flex-end">          283</span>
                                <span> spots left</span>
                            </span>
                        </p>
                    </div>

                    {/* progress bar */}
                    <div className="bg-white-smoke">
                    <div className="juno-green-loader" style={{width: "88.76%"}}>
                    </div>
                    </div>

                    {/* signup now button */}
                    <div className="sign self-center">
                        <div className="w-full">
                            <button className="h-15 text-center cursor-pointer primary-btn primary-btn-animation primary-btn-animation:hover">
                                                    Sign Up Now
                            </button>
                        </div>
                    </div>

                    <hr className="linebreak"/>

                    {/*includes */}
                        <p className="includes">
                            INCLUDES
                        </p>

                    {/*LIST ITEMS*/}
                    <div className="point1" >
                        <div className="poin1" >
                            <div className="po1" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="svg1" >
                                    <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" >
                                    </path>
                                </svg>
                            </div> 
                        </div> 
                        <p className="p1" >
                        Charcoal Black Metal Card
                        </p>
                    </div>

                    {/*LIST ITEMS*/}
                    <div className="point1" >
                        <div className="poin1" >
                            <div className="po1" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="svg1" >
                                    <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" >
                                    </path>
                                </svg>
                            </div> 
                        </div> 
                        <p className="p1" >
                        2.15%<sup>1</sup> Bonus Rate Checking Account
                        </p>
                    </div>

                    {/*LIST ITEMS*/}
                    <div className="point1" >
                        <div className="poin1" >
                            <div className="po1" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="svg1" >
                                    <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" >
                                    </path>
                                </svg>
                            </div> 
                        </div> 
                        <p className="p1" >
                        5% Cash back on brands you love
                        </p>
                    </div>


                    {/*LIST ITEMS*/}
                    <div className="point1" >
                        <div className="poin1" >
                            <div className="po1" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="svg1" >
                                    <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" >
                                    </path>
                                </svg>
                            </div> 
                        </div> 
                        <p className="p1" >
                        Free Cash Withdrawals
                        </p>
                    </div>


                    {/*LIST ITEMS*/}
                    <div className="point1" >
                        <div className="poin1" >
                            <div className="po1" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="svg1" >
                                    <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" >
                                    </path>
                                </svg>
                            </div> 
                        </div> 
                        <p className="p1" >
                        Phone & Chat Support
                        </p>
                    </div>


                    {/*Account fund*/}
                    <p className="acc">
                        Fund your account with a minimum opening deposit of  
                        <span className="font-bold"> $1000. </span> 
                        3 additional free ATM withdrawals per month from out of network ATMs.
                    </p>

                    {/*bottom card*/}

            
                    <div className="card2 w-full block rounded-b-10">
                            <div className="relative bottom-24">

                                <div className="foot" >
                                    <div className="foot1" >
                                        <div className="svgg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="svggg" >
                                                <path fill="#00A86B" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" >
                                                </path>
                                            </svg>
                                        </div> 
                                    </div> 
                                    <div className="ml25" >
                                        <p className="member" >
                                            <span className="line-through" >
                                                $11.99/m Membership Fee
                                            </span>
                                        </p> 
                                        <p className="free" >
                                            Free for 6 months 
                                        </p> 
                                        <p className="saving" >
                                            $60 Savings
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        

    {/*card2*/}
    











                <div className="col-lg-4">
                <img className="credit" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" alt="card"></img>
                <div className="card w-full block rounded-10">
                    <div className="card1 w-full block rounded-10">
                    <div className="relative bottom-24">
                   
                   <p className="metal item-gunmetal-gray opacity-80 uppercase">
                                   METAL
                               </p>
                   <p className="text-54 font-mono font-black text-dark-night leading-tight tracking-normal antialiased">
                       <span className="text-juno-blue">
                           2.15%
                   </span> <span className="align-text-top text-24 font-mono font-bold text-slate-gray -ml-3">
                           1
                   </span></p>
                   <p className="mt-3 text-20 leading-tight tracking-normal antialiased">
                       <span className="py-1 pl-2 pr-1 font-mono font-black text-juno-white-900 rounded-05 bg-juno-green">
                                       5%
                   </span> 
                   
                   <span className="back ml-2">
                                       cash back
                   </span></p>

                    </div>
                    </div>

                    <div className="mt-065 mb-0575" >
                        <div className="h-625 flex justify-between">
                            <div className="flex">
                                <p className="text-20 font-mono font-bold leading-normal tracking-normal antialiased text-juno-green">
                                    2219
                                </p> 
                                <p className="self-end text-14 font-mono font-bold text-juno-gray-900 leading-tight tracking-normal antialiased">
                                    <span className="text-14 font-mono font-bold text-type-gray leading-none tracking-normal antialiased">
                                        /
                                    </span>
                                        2500
                                    <span className="text-14 font-mono font-normal text-type-gray leading-none tracking-normal antialiased">
                                        spots
                                    </span>
                                </p>
                            </div> 
                            <p className="self-end text-12 font-mono font-normal text-type-gray leading-tight tracking-normal antialiased">
                                <span className="font-bold">
                                        281 
                                    </span>
                                    spots left
                            </p>
                        </div> 
                        <div className="w-full mt-225" >
                            <div className="w-full h-025 flex bg-white-smoke rounded-05">
                                <div className="h-full rounded-05 juno-green-loader" style={{width: "560px"}}>
                                </div>
                            </div> 
                            <div className="mt-5 w-full h-15 flex self-center">
                                <div className="w-full">
                                    <button className=" h-15 text-center cursor-pointer primary-btn primary-btn-animation primary-btn-animation:hover">
                                            Sign Up Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                
                
                </div>
                </div>
                <div className="col-lg-4">
                <img className="credit" src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" alt="card"></img>
                <div className="card w-full block rounded-10">
                </div>
                </div>
            </div>








            

            </div>
        </section>
        </>
           
 
        );
   
}
export default Home;