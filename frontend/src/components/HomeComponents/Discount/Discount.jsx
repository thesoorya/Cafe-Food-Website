import React, { useEffect, useState } from 'react';
import "./Discount.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const Discount = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/foods/discount?discount=true&limit=3")
            .then((res) => {
                setFoods(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <header id='Discount'>
            <Container>
                <Row className="d-flex justify-content-center g-5">
                    {
                        foods.map((food, index) => (
                            <Col xs={12} md={8} sm={7} lg={4} key={index}>
                                < Link to={`/foods/${food.name}`}>
                                    <div className="discountContainer" style={{ aspectRatio: '4/3' }}>
                                        <div className="discountTextOverlay">
                                            <div className='discountDesc'>
                                                <h2 className='m-0'>{food.name}</h2>
                                                <div>
                                                    <span className='m-0'><del>₹{food.price}</del></span>&nbsp; <span>₹{food.discountPrice}</span>
                                                </div>
                                                <p className='m-0'>Grab the items and get the benefit</p>
                                            </div>
                                        </div>
                                        <img src={food.images[0]} alt="" className="discountImg img-fluid" />
                                        <div className="discountGradient"></div>
                                    </div>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </header >
    );
}

export default Discount;