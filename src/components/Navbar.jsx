import React from 'react'
import Logo from '../assets/amazonlogo.png'
import MapPin from '../assets/icons/map-pin.png'
import Search from '../assets/icons/search.svg'
import Cart from '../assets/icons/cart.svg'
import India from '../assets/icons/india.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <header className='header'>
            <div className='first-block'>
                <div className='logo p-1'>
                    <img src={Logo} alt='logo' width='110px' />
                </div>
                <div className='location-block p-1'>
                    <div>
                        <img src={MapPin} alt='location' width='20px' />
                    </div>
                    <div className='location-label'>
                        <p className='text-gray my-0 fs-1'>Deliver to Sandeep</p>
                        <p className='text-white strong my-0 fs-2'>Valsad 396001</p>
                    </div>
                </div>
            </div>
            <div className='second-block p-1'>
                <form className='search-block'>
                    <select className='input-select'>
                        <option>All</option>
                        <option>All</option>
                        <option>All</option>
                    </select>
                    <input className='search-input' type='text' />
                    <button className='yellow search-btn' type='submit' >
                        <img src={Search} alt='search' />
                    </button>
                </form>
            </div>
            <div className='third-block'>
                <div className='country'>
                    <img src={India} alt='search' width='24px' />
                    <select className='lang-select'>
                        <option>EN</option>
                        <option>EN</option>
                        <option>All</option>
                    </select>
                </div>
                <div className='location-label p-1'>
                    <p className='text-white my-0 fs-1'>Hello, Sandeep</p>
                    <p className='text-white strong my-0 fs-2'>Accounts & lists</p>
                </div>
                <div className='location-label p-1'>
                    <p className='text-white my-0 fs-1'>Returns</p>
                    <p className='text-white strong my-0 fs-2'>& Orders</p>
                </div>
                <div className='cart-block p-1'>
                    <img src={Cart} alt='logo' width='36px' />
                    <p className='text-white strong my-0 fs-2'>Cart</p>
                </div>
            </div>
        </header>
    )
}
