import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

const Main = () => {
    const location = useLocation(); // Get the passed state
    const { id, message } = location.state || {}; // Destructure data from state
    const { email, password } = useParams(); // Get data from URL parameters

    const navigate = useNavigate()

    const category = [
        {
            'id': 1,
            'name': "Điện thoại"
        },
        {
            'id': 2,
            'name': "Laptop"
        },
        {
            'id': 3,
            'name': "Ipad"
        },
    ]

    const product = [
        {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        },
        {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': '3.890.000',
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        },

    ]

    const detailProduct = () => {
        navigate('/')
    }

    
    const showCart = () => {
        return (
            <div style={{backgroundColor:'red'}}>
                {
                    product.map((itme, index) => (
                        <div className="row item-cart">
                            <div className="col-lg-6" style={{ display: 'flex', alignItems: 'center' }}>
                                <span >{itme.name}</span>
                            </div>
                            <div className="col-lg-6 row text-center" >
                                <span className="col-lg-3">{itme.price}</span>
                                <div style={{ alignItems: 'center' }} className="col-lg-3 ">
                                    <input className="input-number" onChange={(number) => number} type="number" />
                                </div>
                                <span className="col-lg-3">{itme.price * 2}</span>
                                <span className="col-lg-3">Xoa</span>
                            </div>
                        </div>

                    ))
                }
            </div>
        )
    }


    const listProduct = () => {
        return (
            <div className="row">
                {
                    product.map((item) => (
                        <div className="col-md-6 col-sm-6 col-lg-2" >
                            <div className="product" >
                                <a href="/">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={item.image} className="img-product" />
                                    </div>

                                    <h5>{item.name}</h5>
                                    <h6 className="price-product">{item.price}</h6>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }


    return (
        <div>
            {/* <h1>Details Page</h1>
            <p>Email: {email}</p>
            <p>Password: {password}</p> */}
            <div style={{ marginLeft: '15%', marginRight: '15%' }}>
                {/* <CustomMenu />
            <ItemCategory category={category} /> */}
                <div className="row">
                    <img src="//cdnv2.tgdd.vn/mwg-static/tgdd/Banner/25/bf/25bfac032daaa77fe6ef17a1e48876cb.png" />
                </div>

                <div className="title">
                    <img src={require('../../assets/images/ic_promotion.png')} className="img-icon" />
                    <h2>Khuyến mãi Online</h2>
                </div>
                {
                    listProduct()
                }
            </div>

            {/* <div style={{height:50,backgroundColor:'#ffd500',marginTop:10}}/>
            <div className="Footer">
                <div className="row">
                    <div className="col-lg-3">
                        <h5>Toong dai ho tro</h5>
                        <div>
                            <span>Goi mua</span>
                            <span className="phone-number">012343242</span>
                        </div>
                        <div>
                            <span>Khieu nai</span>
                            <span className="phone-number">012343242</span>
                        </div>
                        <div>
                            <span>Bao hanh</span>
                            <span className="phone-number">012343242</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5>Toong dai ho tro</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>Toong dai ho tro</h5>
                    </div>
                    <div className="col-lg-3">
                        <h5>Toong dai ho tro</h5>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Main;