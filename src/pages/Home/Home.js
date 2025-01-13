import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import CustomMenu from "../../components/CustomMenu/CustomMenu";


const Home = () => {
    const location = useLocation(); // Get the passed state
    const { id, message } = location.state || {}; // Destructure data from state
    const { email, password } = useParams(); // Get data from URL parameters

    const category = [
        {
            'id': 1,
            'name': "Điện thoại"
        },
        {
            'id': 2,
            'name': "Điện thoại"
        },
        {
            'id': 3,
            'name': "Điện thoại"
        },
    ]

    const itemCategory = ({ item }) => {
        const { id, name } = item
        return (
            <div>
                <h1>{name}</h1>
            </div>
        )

    }

    return (
        <div>
            <div>
                {
                    category.map((item) => (
                        <div>
                            <h1>{item.name}</h1>
                        </div>
                    ))
                }
                
            </div>
            {/* <h1>Details Page</h1>
            <p>Email: {email}</p>
            <p>Password: {password}</p> */}
        </div>
    )
}

export default Home;