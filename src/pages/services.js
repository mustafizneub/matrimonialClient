import React from 'react'
import { Link } from 'react-router-dom';
import "./services.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const ServicePage = () => {




    return (
        <div>

            <div id="generic_price_table">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="price-heading clearfix">
                                    <h1>Our Premium Packages</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container">


                        <div className="row">
                            <div className="col-md-4">


                                <div className="generic_content clearfix">


                                    <div className="generic_head_price clearfix">


                                        <div className="generic_head_content clearfix">


                                            <div className="head_bg"></div>
                                            <div className="head">
                                                <span>Wedding planner</span>
                                            </div>


                                        </div>



                                        <div className="generic_price_tag clearfix">
                                            <span className="price">
                                                <span className="sign">$</span>
                                                <span className="currency">99</span>
                                                <span className="cent">.99</span>
                                                <span className="month">/Event</span>
                                            </span>
                                        </div>


                                    </div>

                                    <div className="generic_feature_list">
                                        <ul>
                                            <li><span>Full Event management</span></li>
                                            <li><span>Full Catering</span></li>
                                            <li><span>Wedding Photography </span></li>
                                            <li><span>Wedding Stage Decoration</span></li>
                                            <li><span>VIDEO- story or Cinematography</span></li>
                                            <li><span>Horse and Palki for arrival of Bride & Groom</span></li>
                                        </ul>
                                    </div>


                                    <Link to="/checkout?title=Wedding Plan">
                                        <div className="generic_price_btn clearfix">
                                            <a className="" href="">Buy now</a>
                                        </div></Link>


                                </div>


                            </div>

                            <div className="col-md-4">


                                <div className="generic_content active clearfix">


                                    <div className="generic_head_price clearfix">


                                        <div className="generic_head_content clearfix">


                                            <div className="head_bg"></div>
                                            <div className="head">
                                                <span>Honeymoon Package</span>
                                            </div>


                                        </div>



                                        <div className="generic_price_tag clearfix">
                                            <span className="price">
                                                <span className="sign">$</span>
                                                <span className="currency">199</span>
                                                <span className="cent">.99</span>
                                                <span className="month">/MON</span>
                                            </span>
                                        </div>


                                    </div>



                                    <div className="generic_feature_list">
                                        <ul>
                                            <li><span>3 Days 2 Nights @ 4/5*</span></li>
                                            <li><span>Deluxe / Premier Room @ 4/5 Star Standard hotel</span></li>
                                            <li><span>Candle Light Dinner</span></li>
                                            <li><span>Honeymoon Cake</span></li>
                                            <li><span>Airport to hotel transfer</span></li>
                                            <li><span>Buffet Breakfast</span></li>
                                            <li><span>Free Fruit Basket</span></li>

                                        </ul>
                                    </div>


                                    <Link to="/checkout?title=Honneymoon pakage">
                                        <div className="generic_price_btn clearfix">
                                            <a className="" href="">Buy Now</a>
                                        </div></Link>


                                </div>


                            </div>
                            <div className="col-md-4">


                                <div className="generic_content clearfix">


                                    <div className="generic_head_price clearfix">


                                        <div className="generic_head_content clearfix">


                                            <div className="head_bg"></div>
                                            <div className="head">
                                                <span>Unlimited</span>
                                            </div>


                                        </div>



                                        <div className="generic_price_tag clearfix">
                                            <span className="price">
                                                <span className="sign">$</span>
                                                <span className="currency">299</span>
                                                <span className="cent">.99</span>
                                                <span className="month">/MON</span>
                                            </span>
                                        </div>


                                    </div>



                                    <div className="generic_feature_list">
                                        <ul>
                                            <li><span>Add</span></li>
                                            <li><span>Add</span></li>
                                            <li><span>Add</span></li>
                                            <li><span>Add</span></li>
                                            <li><span>Add</span></li>
                                        </ul>
                                    </div>



                                    <div className="generic_price_btn clearfix">
                                        <a className="" href="/signup">Sign up</a>
                                    </div>


                                </div>


                            </div>
                        </div>


                    </div>
                </section>
                <footer className="home_logo">
                    <Link to="/">
                        <img className="login__logo" src="https://i.ibb.co/tHFX7BM/1245.png" /></Link>
                </footer>
            </div>



        </div>
    )
}

export default ServicePage;

