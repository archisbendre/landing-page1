import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Button, Container } from '../../globalStyles';
import {FaMagento, FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom";
import { IconContext } from 'react-icons/lib';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[]);

    return (
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    PLUS ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                
                
                    <NavItem>
                        <NavLinks to='/services'>
                            Services
                        </NavLinks>
                    </NavItem>
                
                
                    <NavItem>
                        <NavLinks to='/products'>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/sign-up'>
                                <Button fontBig primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavContainer>
        </Nav>
        </IconContext.Provider>
    )
}

const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;

`;

const NavContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center; 
`;

const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) =>(click ? 0: '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}

`;

const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px){
    width: 100%;

    &:hover {
        border: none;
    }
}
`;

const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`;

const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`;

const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`;



export default Navbar
