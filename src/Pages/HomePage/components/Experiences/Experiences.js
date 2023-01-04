import React from "react";
import { ExperienceDiv, Explain, ImportantParts, Title } from "./ExperienceStyle";

export const Experiences = ()=>{
    return(
        <ExperienceDiv>
            <Title>
                My Experiences
            </Title>
            <Explain>
                -I have a lot of <ImportantParts>projects</ImportantParts>, and you check them from my <a href ="/projects">Project Page</a>.
            </Explain>
            <Explain>
                -I was an intern in <a href="https://www.pixelsoftoffice.com/default.aspx">Pixel Soft Office</a> for two months. I mostly worked on website 
                backend services while I was in this internship. I learnt a lot of things from it, like using <ImportantParts>SQL</ImportantParts> in advanced and dynamic ways as a database and
                using <ImportantParts>C#</ImportantParts> for API.
            </Explain>
            <Explain>
                -I was working in <a href="https://www.edufunlife.com.tr/">Edu Fun Life</a> for two years which is a student private lesson company.
                While working there, I helped many students' <ImportantParts>math lessons</ImportantParts>, and also I taught <ImportantParts>python</ImportantParts> some of them.
            </Explain>
            
        </ExperienceDiv>
    )
}