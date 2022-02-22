import React, { useState, useEffect } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import styledComponents from "styled-components";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(0);
  const [color, setColor] = useState("grey");

  const toggleHandler = () => {
    toggle === 0 ? setToggle(100) : setToggle(0);
    toggle === 100 ? setToggle(0) : setToggle(100);
  };
  useEffect(() => {
    if (toggle === 0) {
      setColor("black");
      document.body.style.backgroundColor = "white";
      const title = document.getElementById("title");
      title.style.color = "black";
    } else {
      setColor("whitesmoke");
      document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
      const title = document.getElementById("title");
      title.style.color = "white";
    }
  }, [toggle]);

  return (
    <Container>
      <Title id="title">Dark/Light Mode Toggle</Title>
      <Input type="checkbox" id="checkbox" />
      <Label htmlFor="checkbox" onClick={toggleHandler}>
        <SunIcon>
          <FaRegSun />
        </SunIcon>
        <MoonIcon>
          <FaRegMoon />
        </MoonIcon>
        <Rotate toggle={toggle} color={color} />
      </Label>
    </Container>
  );
}

const Container = styledComponents.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding:20px;
  margin:10px auto;
`;
const Title = styledComponents.h1`
padding:20px;
font-size:1.4rem;
font-family:monospace;
font-style:italic;
`;
const Label = styledComponents.label`
  display:flex;
  width:153px;
  height:55px;
  padding:5px;
  justify-content:space-between;
  align-items:center;
  background-color: aliceblue;
  border-radius:30px;
  position:relative;
  border:1.5px solid black;
  `;

const Input = styledComponents.input`
display:none;`;

const SunIcon = styledComponents.i`
color:orange;
font-size:1.4rem;
padding:5px;
`;
const MoonIcon = styledComponents.i`
font-size:1.4rem;
padding:5px;`;

const Rotate = styledComponents.div`
height:50px;
width:50px;
transition: all 1s ease;
left:${(props) => props.toggle}px;
border:0.2px solid black;
background-color:${(props) => props.color};
position:absolute;
border-radius:50%;`;

export default App;
