// components/CustomMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CustomMenu.css'; // Optional for styling
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomMenu = () => {
    const navigate = useNavigate()

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    const logOut = () => {
        navigate('/')
    }

    const gotoCart = () => {
        navigate('cart/')
    }

    return (
        <div className='header row'>
            <div className='col-sm-12 col-md-6 col-lg-6 row' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='col-sm-6 '>
                    <img src={require('../../assets/images/ic_shop.png')} className='img-shop' />
                </div>
                <a href='/cart' style={{ textDecoration: 'none' }}  className='col-sm-6'>
                    <div style={{ justifyItems: 'end', display: 'flex', alignItems: 'center' }} >
                        <input placeholder='tim kiem san pham' className='input-search' />
                        {/* <a style={{ color: 'white', fontSize: 15, marginLeft: 40, marginRight: 5 }}>Gio hang</a> */}
                        <img src={require('../../assets/images/ic_cart.png')} className='img-cart' />
                    </div>
                </a>

            </div>
            <div className='col-sm-12 col-md-6 col-lg-6' style={{ justifyContent: 'end', display: 'flex' }} >
                <a href='/' style={{ textDecoration: 'none' }}>
                    <div className='btn-logout'>
                        <FaSignOutAlt className='icon-logout' size={24} color="white" />
                        <span className='text-logout'>Logout</span>
                    </div>
                </a>
            </div>
        </div>

    );
};

export default CustomMenu;