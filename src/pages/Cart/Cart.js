import React from "react";
import './Cart.css'

const Cart = () => {

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
        },

    ]

    const showProduct = () => {
        return (
            <div>
                {
                    product.map((itme,index) => (
                        <div className="row">
                            <div className="col-lg-6">
                                <span >{itme.name}</span>
                            </div>
                            <div className="col-lg-6 row">
                                <span className="col-lg-3">{itme.price}</span>
                                <input className="col-lg-3"  onChange={(number)=>number} type="number"/>
                                <span className="col-lg-3">{itme.price * 2}</span>
                                <span className="col-lg-3">Xoa</span>
                            </div>
                        </div>

                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <div className="container" style={{ height: '100%' }}>
                <div className="row" style={{}}>
                    <div className="col-lg-6">
                        <span >Sam pham</span>
                    </div>
                    <div className="col-lg-6 row">
                        <span className="col-lg-3"> don gia</span>
                        <span className="col-lg-3">So luong</span>
                        <span className="col-lg-3">so tien</span>
                        <span className="col-lg-3">Thao tac</span>
                    </div>
                </div>
                {
                    showProduct()
                }
            </div>
        </div>
    )
}

export default Cart;