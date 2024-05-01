import React, { useEffect, useState } from 'react';
import "./Category.css"
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Category = () => {

    const [foods, setFoods] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/foods/category?category=${category}&limit=7`)
            .then((res) => {
                setFoods(res.data.data)
            })
            .catch((error) => {
                console.log(error); f
            })
    }, [])

    console.log(foods);

    return (
        <>
            <header id='Category'>
                <h1 className='d-flex justify-content-center pb-3'>Model</h1>
                <Container>
                    <Row className="d-flex justify-content-center g-4">
                        {foods.map((food, index) => (
                            <Col xs={12} lg={6} key={index}>
                                <Link to={`/foods/${food.name}`}>
                                    <div className="categoryContainer">
                                        <div className="categoryTextOverlay">
                                            <div style={{
                                                width: "100%"
                                            }} className="categoryDesc">
                                                <h1>{food.name}</h1>
                                                <p>Price: ₹{food.price}</p>
                                            </div>
                                        </div>
                                        <img src={food.images[0]} alt="" className="categoryImg img-fluid" />
                                        <div className="categoryGradient"></div>
                                    </div></Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Category;