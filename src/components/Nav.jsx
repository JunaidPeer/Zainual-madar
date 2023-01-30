import React from "react";

// import logo from '../images/logo.svg'
import logo2 from '../images/JP_01.png'
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import {BsYoutube} from 'react-icons/bs';
import { FaTwitterSquare } from "react-icons/fa";
import {FaFacebookSquare} from 'react-icons/fa';
const Nav = () => {
  return (
      <Navbar>
        <img src={logo2} alt="logo"
       style={{width: 150, height: 150, borderRadius: 150/ 2}} 
     />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Work</li>
          <li>Insights</li>
          <li><Icons><a href="https://www.instagram.com/syed_zainul_madar/"><AiFillInstagram></AiFillInstagram></a>
          <a href="https://www.facebook.com/profile.php?id=100063955095189"> <FaFacebookSquare></FaFacebookSquare></a>
          <a href=""> <FaTwitterSquare></FaTwitterSquare></a>
          <a href="https://www.youtube.com/@silsilaealviyaomadariya5769"><BsYoutube></BsYoutube></a>
          </Icons></li>
        </ul>
      </Navbar>
  );
}
const Navbar = styled.nav`
margin-bottom: 10px;
display: flex;
justify-content: center;
`;
const Icons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
font-size: 42px;
flex: 1;
`;
export default Nav;