import React, {useRef} from 'react'
import "./SearchBar.css";
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config.js';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationref=useRef('');
    const distanceref=useRef(0);
    const maxgroupsizeref=useRef(0);
    const navigate=useNavigate();
    const searchHandeler=async()=>{
        const location=locationref.current.value
        const distance=distanceref.current.value
        const maxgroupsize=maxgroupsizeref.current.value
        if(location===''||distance===''||maxgroupsize===''){
            alert("All fields are necessery")
        }
        const res= await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxgroupsize}`);

        if(!res.ok){alert('Something wrong')}
        const result=await res.json()
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxgroupsize}`,{state:result.data})
    };
  return <Col>
     <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex form__group form__group-fast'>
                <span>
                <i className="ri-map-pin-line"></i>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='Whereare you going' ref={locationref}/>
                </div>
                </span>
            </FormGroup>
            <FormGroup className='d-flex form__group form__group-fast'>
                <span>
                <i className="ri-map-pin-time-line"></i>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder='Distance km/h' ref={distanceref}/>
                </div>
                </span>
            </FormGroup>
            <FormGroup className='d-flex form__group form__group-fast'>
                <span>
                <i className="ri-group-line"></i>
                <div>
                    <h6>Max People</h6>
                    <input type='number' placeholder='0' ref={maxgroupsizeref}/>
                </div>
                </span>
            </FormGroup>
            <span className="search__icon" type='submit' onClick={searchHandeler}>
            <i className="ri-search-line"></i>
            </span>
        </Form>
     </div>
  </Col>
}

export default SearchBar
