import React, { useEffect, useState } from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Banner = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://foodstore-backend-xu6z.onrender.com/foods/items/categories")
      .then((res) => {
        setCategories(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <header id='Banner'>
        <h1 className='d-flex justify-content-center pb-3'>Categories</h1>
        <Container>
          <Row className="d-flex justify-content-center g-4">
            {categories.map((category, index) => (
              <Col xs={12} lg={6} key={index}>
                <div className="bannerContainer">
                  <div className="bannerTextOverlay">
                    <div className='bannerDesc' style={{
                      width: "100%"
                    }}>
                      <h1 className="m-0">{category.category} </h1>
                      <p className="m-0">Satisfy your cravings with our delicious desserts choices!</p>
                        <Link to={`/foods/items/${category.category}`}>
                            <button className="bannerBtn m-0">View</button>
                        </Link>
                    </div>
                  </div>
                  <img src={category.image} alt="" className="bannerImg img-fluid" />
                  <div className="bannerGradient"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Banner;