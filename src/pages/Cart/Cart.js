import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import './Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCart } from "../../redux/slices/apiSlice";

const Cart = () => {
    const location = useLocation(); // Get the passed state
    const { id, message } = location.state || {}; // Destructure data from state
    const { email, password } = useParams(); // Get data from URL parameters
    const [sum, SetSum] = useState(0)
    const [select, setSelect] = useState([])
    const [cart, setCart] = useState([])
    const [selects, setSelects] = useState(false)
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);
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
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        },
        {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        }, {
            'name': 'HONOR Pad X9 WiFi 4GB/128GB',
            'price': 3890000,
            'image': 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg'
        },

    ]

    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    useEffect(() => {
        setCart(data)
    }, [data]);

    useEffect(() => {
        let price = 0

        cart.map((item, index) => (
            price = select.includes(index) ? price + ( item.price * item.number_product): price
        ))
        SetSum(price)

        console.log('select', select)
    }, [select])

    const onSelect = (bool, index) => {
        if (bool) {
            setSelect([...select, index])
        } else {
            setSelect(select.filter(_filter => _filter != index))
        }

    }

    const detailProduct = () => {
        navigate('/')
    }

    const formatMoney = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
    };

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
                <div>
                    {
                        cart.map((item, index) => {
                            const isCheck = select.includes(index)

                            return (
                                <div className="row" style={{ backgroundColor: index % 2 == 0 ? '#DDDDDD' : 'white' }}>
                                    <div className="col-md-6" >
                                        <div className="item-cart" style={{ display: 'flex', alignItems: 'center' }} >
                                            <input className="checkbox" type="checkbox" checked={isCheck} onChange={(event) => onSelect(!isCheck, index)} />
                                            <img src={item.imags} style={{ width: 40, height: 40, marginRight: 10 }} />
                                            <span >{item.name} </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6" >
                                        <div className="item-cart row" >
                                            <span className="col-lg-3">{formatMoney(item.price)}</span>
                                            <div style={{ alignItems: 'center' }} className="col-lg-3 ">
                                                <input className="input-number" value='1' onChange={(number) => number} type="text" style={{ justifyItems: 'center' }} />
                                            </div>
                                            <span className="col-lg-3">{formatMoney(item.price*item.number_product)}</span>
                                            <a href="#" className="col-lg-3">
                                                <p>Xoa</p>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }

    const selectAll = (bool) => {
        let price = 0
        let select = []
        if (bool) {
            cart.map((item, index) => {
                price = price + item.price
                select.push(index)
            })

        }
        setSelect([...select])
        SetSum(price)

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
                <div className="payment">
                    <div className="row" >
                        <div className="col-md-6" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#99FF66', padding: 20 }}>
                            <input className="checkbox" type="checkbox" onChange={(event) => { selectAll(event.target.checked) }} />
                            <label style={{ fontSize: 22, textAlign: 'center' }}> Chon tất cả {select.length} sản phẩm</label>
                        </div>
                        <div className="col-md-6" style={{ display: 'flex', justifyItems: 'center', backgroundColor: '#99FF66', padding: 20 }}>
                            <div className="col-md-8" style={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ fontSize: 22 }}>Tổng thanh toán:  </label>
                                <label style={{ color: 'red', fontWeight: 'bold', marginLeft: 5, fontSize: 24, }}>{formatMoney(sum)}</label>
                            </div>
                            <button className="col-md-4" style={{ backgroundColor: 'yellow', borderRadius: 10 }}>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;