import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";
import  weatherImg from '../assets/images/weather.png';
import  guideImg from '../assets/images/guide.png';
import  customizationImg from '../assets/images/customization.png';

const ServiceData=[
    {
    imgUrl:weatherImg,
    title:"Calculate weather",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit."
    },
    {
    imgUrl:guideImg,
    title:"guides img",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit."
    },
    {
    imgUrl:customizationImg,
    title:"Calculate customize",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit."
    }
]

const ServiceList = () => {
  return <>
  {
    ServiceData.map((item,index)=> <Col lg='3' md='6' sm='12' className='mb-4' key={index}><ServiceCard item={item}/> </Col>)
  }
  </>
}

export default ServiceList
