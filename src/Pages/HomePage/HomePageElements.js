import styled from "styled-components";


export const ContainerDiv = styled.div`
&::-webkit-scrollbar {
  display: none;
}
    position:absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 95%;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 0;
    background: black;
    overflow-x: hidden;
    overflow-y: auto;
`;
export const LastDiv = styled.div`
position: absolute;
top:140%;
width: 100%;
height: 5rem;
`;

export const MyImg = styled.img`
  position: relative;
  width:250px;
  height:250px;
  top:15%;
 
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  margin:0 auto;
  object-fit: cover;
  
  border-radius:100%;
  @media only screen and (max-width: 1024px) {
    top: 10%;
    width:250px;
    height:250px;
  }
`;
export const NameTitle = styled.h1`
    position: relative;
    text-align: center;
    width: 40%;
    top: 20%;
    
    
    margin: 0 auto;
    color: rgb(6, 183, 6);
    @media only screen and (max-width: 1024px) {
    top: 25%;
    width: 40%;

    font-size: 1.6rem;

  }
`;