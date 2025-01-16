import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import CustomMenu from "../../components/CustomMenu/CustomMenu";
import Home from "../Home/Home";
import './Cart.css'
import ItemCategory from "../../components/Category/Category";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

const Cart = () => {
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
            <div style={{ backgroundColor: 'red' }}>
                {
                    product.map((item, index) => (
                        <div className="row item-cart">
                            <div className="col-lg-6" style={{ display: 'flex', alignItems: 'center' }}>
                                <span >{item.name}</span>
                            </div>
                            <div className="col-lg-6 row text-center" >
                                <span className="col-lg-3">{item.price}</span>
                                <div style={{ alignItems: 'center' }} className="col-lg-3 ">
                                    <input className="input-number" onChange={(number) => number} type="number" />
                                </div>
                                <span className="col-lg-3">{item.price * 2}</span>
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
            <div>
                <div className="row">


                    <div className="row">

                        <div className="col-md-6" >
                            <div className="item-cart" >
                                <b>San pham</b>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="item-cart row" >
                                <b className="col-lg-3">Gia tien</b>
                                <b className="col-lg-3">so luong</b>
                                <b className="col-lg-3">thanh tien</b>
                                <b className="col-lg-3">thao tacs</b>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row">
                    {
                        product.map((item) => (
                            <div className="row">

                                <div className="col-md-6" >
                                    <div className="item-cart" style={{ display: 'flex', alignItems:'center' }} >
                                        <img src={item.image} style={{ width: 40, height: 40, marginRight: 10 }} />
                                        <span >{item.name} </span>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="item-cart row" >
                                        <span className="col-lg-3">{item.price}</span>
                                        <div style={{ alignItems: 'center' }} className="col-lg-3 ">
                                            <input className="input-number" value='1' onChange={(number) => number} type="text" style={{justifyItems:'center'}} />
                                        </div>
                                        <span className="col-lg-3">{item.price * 2}</span>
                                        <span className="col-lg-3">Xoa</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }


    return (
        <div>

            <div style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="title">
                    <img src={require('../../assets/images/ic_promotion.png')} className="img-icon" />
                    <h2>Gio hang</h2>
                </div>
                {
                    listProduct()
                }
            </div>


        </div>
    )
}

export default Cart;