import React from "react";
import { Link } from "react-router-dom";
import '../Styles/MerchantNavbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';

const MerchantNavbar = () => {
    return (
        <nav id="navbar">
            <div className="logo">
                <h1>UrKart</h1>
            </div>
            <div className="option">
                <Link to="/merchanthomepage/productview">View Products</Link>
                <Link to="/merchanthomepage/addproducts">Add Products</Link>
            </div>

            <div className="account">
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        <AccountCircleIcon/> Accounts
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/merchanthomepage/updateproducts">Update Product</Dropdown.Item>
                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </nav>
    );
}

export default MerchantNavbar;