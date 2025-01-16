import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './Navigation';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomMenu from "../src/components/CustomMenu/CustomMenu";
import ItemCategory from "../src/components/Category/Category";

function App() {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const category = [
    {
      'id': 1,
      'name': "Điện thoại",
      'submenu':[
        {
        'itemsub':'Sam sung'
       }
      ]
    },
    {
      'id': 2,
      'name': "Laptop",
      'submenu':[
        {
        'itemsub':'Sam sung'
       }
      ]
    },
    {
      'id': 3,
      'name': "Ipad",
      'submenu':[
        {
        'itemsub':'Sam sung'
       }
      ]
    },
  ]

  return (
    <Router>
      {/* <Navigation /> */}
      <div style={{marginLeft:'15%',marginRight:'15%'}}>
        <CustomMenu />
        <ItemCategory category={category} />
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/:email/:password" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <div style={{ height: 50, backgroundColor: '#ffd500', marginTop: 10 }} />
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
      </div>
    </Router>


  );
}

export default App;