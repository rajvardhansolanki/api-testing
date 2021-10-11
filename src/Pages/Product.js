import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Loader from "react-loader-spinner";


const Home = () => {

    const [post, setPost] = useState([]);
    const [loading, setloading] = useState(true);

    const getdata = () => {
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
        
    }
    

    useEffect(() => {
        getdata();

        window.scrollTo(0, 0);
   
    }, [])


    return (
        <>

            <section>
            <button type="button" onClick={Top} id="btn-top">Top</button>
                <div className="container-fluid">
                <div className="row p-10">
                    <div className="col-12">
                        <h1 className="mt-30 fs-35 mx-35">Exclusive product</h1>
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
                                                        <NavLink className="btn_view" to="./Product_details"><span>view</span></NavLink>
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

export default Home;
