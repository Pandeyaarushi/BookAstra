import React from 'react'
import "./NewsLetter.css";
import { Container,Row,Col } from 'reactstrap';
import maleTourist from "../../src/assets/images/male-tourist.png"
const NewsLetter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Suscribe for new information</h2>
                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your Email'/>
                        <button className="btn newsletter__btn">
                            Suscribe
                        </button>
                    </div>
                    <p>Lorem Lorem ipsum dollorem5
                        or sit amet.ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, esse.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt=''/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter
