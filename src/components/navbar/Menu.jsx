import React from 'react'
import { useState } from 'react'
import styled from "styled-components";
import { ReactComponent as MenuIcon } from '../../img/icons/menu.svg'


const MenuIconStyle = styled.div`
    position: absolute;
    right: 50px;
    cursor: pointer;
    z-index: 10;
    transform: scale(1.5);
`

const NavBackground = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    background-color: #000;
    transform: ${(props) => (props.clicked ? "scale(500)" : "scale(0)")};
    transition: transform 0.8s ease-in-out;
    width: 20px;
    height: 20px;
    z-index: 9;
`

const Navbar = styled.nav`
    position: absolute;
    top: 0;
    left: 35%;
    right: 35%;
    height: 100vh;
    display: ${(props) => (props.clicked ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: ${(props) => (props.clicked ? "auto" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    transition: all 0.4s;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style-type: none;
        margin-bottom: 40px;
        text-align: center;
        width: 100%;
        
        li {
            color: white;
            font-size: 1.8rem;
            margin-bottom: 35px;
            text-align: center;
            cursor: pointer;
        }

        p {
            padding: 5px 20px;
            -webkit-appearance: inherit;
        }
    }

    p:hover, .languages > p:hover {
        background-color: white;
        color: black;
        transition: all 0.2s;
        padding: 5px 20px 5px 20px;
    }

    .languages {
        p {
            color: white;
            text-align: center;
            margin-bottom: 5%;
            padding: 5px 20px;
            cursor: pointer;
        }

        p.languages:hover {
            background-color: black;
            color: white;
            transition: none;
        }
    }

    @media screen and (min-width: 1024px){
        left: 43%;
        right: 43%;
    }

`;


function Menu({ handleLanguage, content }) {
    const [clicked, setClick] = useState(false);
    
    const handleClick = () => setClick(!clicked);
    
    const goToLink = (e) => {
        const linkId = e.target.dataset.id;
        handleClick();
        setTimeout(()=>{
            document.querySelector(linkId).scrollIntoView({
                behavior: 'smooth'
           });
        }, 700)

    }

    return (
        <>
            <MenuIconStyle onClick={handleClick}>
                <MenuIcon />
            </MenuIconStyle>
            <NavBackground clicked={clicked} onClick={handleClick}>&nbsp;</NavBackground>
            <Navbar clicked={clicked}>
                <ul>
                    {content.menu.navbar.map( item  => {
                        return (
                            <li key={item.title}><p data-id={item.id} onClick={goToLink}>{item.title} </p></li>
                            )
                        })}
                </ul>
                <div className="languages">
                    <p className="languages"><strong>{content.menu.language}</strong></p>
                    <p onClick={handleLanguage} data-lang='ptbr'>português</p>
                    <p onClick={handleLanguage} data-lang='en'>english</p>
                </div>
            </Navbar>
        </>
    )
}

export default Menu;