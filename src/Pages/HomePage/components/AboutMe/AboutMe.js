import React from "react";
import { AboutMeDiv, Explain, Title } from "./AboutStyle";

export const AboutMe = ()=>{
    return(
        <AboutMeDiv>
            <Title>
                About Me...
            </Title>
            <Explain>
                I am a Computer Science student in Sabancı University at junior level. My main aim is start my own game company; therefore,
                I am trying to improve myself on game development. However, I also like working with web-development and also mobile development, so while
                improving myself on game development, I also improve myself on these majors too.
            </Explain>
        </AboutMeDiv>
    )
}