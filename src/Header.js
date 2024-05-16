import React from 'react';
import "./Header.css";
import { IoMdBasket } from "react-icons/io";
import { MdOutlineStorefront } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header'>
            {/* logo section */}

            <Link to="/" style={{textDecoration:"none"}}>
                <div className="header_logo">
                    <MdOutlineStorefront className='header_logoImage' />
                    <h2 className='header_logoTitle'>eShop</h2>
                </div>
            </Link>


            {/*  search section*/}

            <div className="header_search">
                <input type='text' className='header_searchInput' />
                <FaSearch className='header_searchIcon' />
            </div>

            {/* navigation section */}

            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>

                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>

                {/* checkout section */}
                <Link to="/checkout" style={{textDecoration:"none"}}>
                    <div className="nav_itemBasket">
                        <span className="nav_itemLineOne"><IoMdBasket className='nav_itemBasketIcon' />
                        </span>
                        <span className="nav_itemLineTwo">0</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header;
