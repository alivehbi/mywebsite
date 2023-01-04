import React from "react";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { ContainerDiv, LastDiv, MyImg, NameTitle } from "./HomePageElements";
import pic from "../Assets/myPhoto.jpg" 
import { Experiences } from "./components/Experiences/Experiences";


export const HomePage = ()=>{

    return(
    <ContainerDiv>
    
        <MyImg src={pic} ></MyImg>
        <NameTitle>Ali Vehbi Guneysu</NameTitle>
        <AboutMe/>
        <Experiences/>
        
        <LastDiv></LastDiv>
    </ContainerDiv>
        )
}