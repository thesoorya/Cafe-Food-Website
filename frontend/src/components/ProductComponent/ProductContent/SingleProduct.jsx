import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./SingleProduct.css"
import CartButton from '../CartButton/CartButton';

const SingleProduct = () => {
    const { name } = useParams();
    const [food, setFood] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/foods/itemsname/${name}`);
                setFood(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [name]);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (!food) {
        return <p>No data found for {name}</p>;
    }

    return (
        <header id='SingleProduct'>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <div className='productImgContainer'>
                            <img src={food.images[0]} className="img-fluid productImg" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="productDesc">
                            <h1>{food.name}</h1>
                            <p><span>Category</span>: {food.category}</p>
                            <p><span>Price</span>: {food.price}</p>
                            <p><span>Description</span>: {food.description}</p>
                        </div>
                        <CartButton price={food.price} />
                    </Col>
                </Row>

            </Container>
        </header>
    );
};

export default SingleProduct;