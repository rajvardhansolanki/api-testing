import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Loader from "react-loader-spinner";

const Product_details = () => {
    const [post, setPost] = useState([]);
    const [loading, setloading] = useState(true);

    const getproduct = () => {
        axios.get('products')
            .then(res => {
                setPost(res.data);
                setloading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const Top = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log('Triggered');
    }

    useEffect(() => {
        getproduct();
        window.scrollTo(0, 0);
        
    }, [])

    return (
        <>
            <section>
                <button type="button" onClick={Top} id="btn-top">Top</button>
                <div className="container-fluid">
                    <div className="row p-10">
                        <div className="col-12">
                            <h1 className="mt-30 fs-35 mx-35">Product details</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 ml-70 mt-70">
                            <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="img " width="290" height="290" />
                        </div>
                        <div className="col-6 ml-90 mt-90">
                            <h1 className="fs-35 ml-30">Polo T-Shirt</h1>
                            <div className="ml-30 mt-30">
                                <span className="dot bg-red"></span>
                                <span className="dot bg-blue"></span>
                                <span className="dot bg-black"></span>
                                <span className="dot bg-purpole"></span>
                            </div>
                            <div class="product-details">
                                <span class="product-catagory">1</span>
                                <h4>
                                    <a aria-current="page" class="active" href="/">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div class="product-bottom-details">
                                    <div class="product-price">
                                        <small>$96.00</small>$230.99</div>
                                    <div class="product-links">
                                        <a aria-current="page" class="icon_link active" href="/">
                                            <i class="fa fa-heart"></i>
                                        </a>
                                        <a aria-current="page" class="icon_link active" href="/">
                                            <i class="fa fa-shopping-cart"></i>
                                        </a>
                                        <a aria-current="page" class="btn_view active" href="/Product_details">
                                            <span>Add to cart</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-20">
                        {loading ?
                            <div className="loder">
                                <Loader
                                    type="Puff"
                                    color="#0984e3"
                                    height={100}
                                    width={100}
                                />
                            </div> :

                            post.map((element) => {
                                return (
                                    <>
                                        <div class="product-card">
                                            <div class="badge">Offer</div>
                                            <div class="product-tumb">
                                                <img src={element.image} alt="img" />
                                            </div>
                                            <div class="product-details">
                                                <span class="product-catagory">{element.id}</span>
                                                <h4><NavLink to="">{element.title}</NavLink></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                                <div class="product-bottom-details">
                                                    <div class="product-price"><small>$96.00</small>$230.99</div>
                                                    <div class="product-links">
                                                        <NavLink to="" className="icon_link"><i class="fa fa-heart"></i></NavLink>
                                                        <NavLink to="" className="icon_link"><i class="fa fa-shopping-cart"></i></NavLink>
                                                        <NavLink className="btn_view" to="#"><span>view</span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product_details;
