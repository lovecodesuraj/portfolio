import React from "react";
import { useNavigate } from "react-router-dom";
import myPic from "../Assets/suraj.jfif";
import "../StyleSheets/home.css";
export default function Home(){
    const navigate = useNavigate();
    return (
        <div className="home">
        <div className="preface">
            <div className="text">
                <h1 className="name" >SURAJ<br/>CHAUDHARY</h1>
                <h4 className="profession">Competitive Coder <br/> <br/>MERN Stack Developer</h4>
                <button className="exploreBtn" onClick={()=>{navigate("/Explore")}}>Explore<span className="rightArrow">➡</span></button>
            </div>
            <div className="picture">
                <img src = {myPic} alt = ""/>
            </div>
        </div>
        </div>
    )
}