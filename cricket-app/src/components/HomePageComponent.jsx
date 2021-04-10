import React,{useEffect,useState} from 'react';
import  wickets from '../images/wickets.jpg';
import './HomePageComponent.css'
const HomePageComponent =()=>{


const handleChange=()=>{

}
    return(<>
    <div className="header-div">
    <img className="header-image" src={wickets} alt="wickets"></img>
    <label className="header-label">Welcome to CricMania!</label>
    </div>
    <input onChange={handleChange} type="text" placeholder="Search a match"/>
    
    </>)

}

export default HomePageComponent;