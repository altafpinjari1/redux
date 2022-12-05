import React from 'react';
import { useState,useEffect } from 'react';
import { bikes } from './bikes';
import './bikelist.css';


export const BikeList = (props) => {
  const [filtBike,setFiltBike]=useState(bikes)
  const [txtSearch,setTxtSearch]=useState("")
  const handelSearch=()=>{
     const filteredBikes=bikes.filter(item=> item.name.toUpperCase().includes(txtSearch.toUpperCase().trim()))
     txtSearch !=="" ? setFiltBike(filteredBikes) : setFiltBike(bikes);
    }
    useEffect(()=>{
      handelSearch();
    },[txtSearch])
    
    return (
      <div>
        <div className='header'>
            <button className='butons'><a href="">HOME</a></button>
            <input  type="text"
            onChange={e=>setTxtSearch(e.target.value)}
            placeholder="Search..."
            style={{ width: "700px" }}
            />
           <button className='butons'><a href="">CART</a></button>
        </div>
        <hr />
        <div>
        {filtBike.map((item) => (
          <div className='bike'>
            <img style={{height:'200px'}} src={item.url} alt="" />
            <h2>{item.name}</h2>
            <h6>{item.model}</h6>
            <h4>{item.price}</h4>
            <button className='buton' onClick={()=>props.addTocartHandler(item)}><h6>ADD TO CART</h6></button><br /><br />
            <button className='buton' onClick={()=>props.removeFromcartHandler(item)}><h6>REMOVE FROM CART</h6></button>
         </div>
        ))}
        </div>
        </div>
    );
};