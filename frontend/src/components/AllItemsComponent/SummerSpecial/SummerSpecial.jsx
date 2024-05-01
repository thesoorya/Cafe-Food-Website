import React, { useEffect, useState } from 'react';
import '../AllItems.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SummerSpecial = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/foods/category?category=summer special&limit=7")
            .then((res) => {
                setFoods(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <header>
            <div className="mainContainer">
                <h1>Summer Special</h1>
                <div className="itemsContainer">
                    {
                        foods.map((food, index) => (
                            <Link to={`/foods/${food.name}`} key={`${index}`}>
                                <div className="items">
                                    <div className="itemImgContainer">
                                        <img src={food.images[0]} className='img-fluid itemImg' alt="" />
                                    </div>
                                    <div className="itemTextOverlay">
                                        <div className='itemDesc'>
                                            <h2>
                                                {food.name}
                                            </h2>
                                            <p>
                                                ₹{food.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="imgGradient"></div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default SummerSpecial;
