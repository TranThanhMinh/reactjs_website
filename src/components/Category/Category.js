import React from "react";
import './Category.css'

const ItemCategory = ({ category }) => {

    return (
        <div className="row">
            <nav className="menu">
                <ul className="menu-list">
                    {
                        category.map((item) => (
                            <li className="menu-item"> <a href="#">{item.name}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )

}

export default ItemCategory;