import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from "../../../assets/c2.mp4"
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    function handleItems() {
        navigate('/foods/items');
    }

    return (
        <header>
            <div className='hero'>
                <video autoPlay loop muted playsInline className='bgVideo'>
                    <source src={bgVideo} type='video/mp4' />
                </video>
                <div className='Text'>
                    <h1 className='heroTitle'>
                        Your Go-to Spot for Delicious Eats & Coffee
                    </h1>
                    <button className="Button" onClick={handleItems}>Explore</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
