import React from 'react'
import { useState } from 'react'
import styled from "styled-components";
import { ReactComponent as MenuIcon } from '../../img/logos/menu.svg'


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

        a {
            padding: 5px 20px;
            -webkit-appearance: inherit;
        }
    }

    a:hover, .languages > p:hover {
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
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <MenuIconStyle onClick={handleClick}>
                <MenuIcon />
            </MenuIconStyle>
            <NavBackground clicked={click} onClick={handleClick}>&nbsp;</NavBackground>
            <Navbar clicked={click}>
                <ul>
                    {content.menu.navbar.map( li  => {
                        return (
                            <li key={li.title}><a href={li.href} onClick={handleClick}>{li.title} </a></li>
                            )
                        })}
                </ul>
                <div className="languages">
                    <p className="languages"><strong>{content.menu.language}</strong></p>
                    <p onClick={handleLanguage} data-lang='allContent.ptbr'>português</p>
                    <p onClick={handleLanguage} data-lang='allContent.en'>english</p>
                </div>
            </Navbar>
        </>
    )
}

export default Menu;