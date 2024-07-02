import React from 'react'
import "./ServiceCard.css";
const ServiceCard = ({item}) => {
    const{imgUrl,title,desc}=item;
  return (
    <div className='service__item'>
        <div className='service__img'>
            <img src={imgUrl} alt='error'/>
        </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  )
}

export default ServiceCard
