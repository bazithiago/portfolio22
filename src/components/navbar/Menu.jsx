import { useState } from 'react'
import styled from "styled-components";
import MenuIcon from '../../../public/logos/menu.svg'
import { nav } from '../../Database/db'


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
    height: 100vh;
    display: ${(props) => (props.clicked ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    transition: display 0.2s;


    ul, div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style-type: none;
        margin-bottom: 40px;
    }
    ul > li {
        color: white;
        font-size: 1.8rem;
        margin-bottom: 35px;
    }
    p, a {
        color: white;
        margin-bottom: 5%;
        padding: 5px 20px;
    }

    a:hover {
        background-color: white;
        color: black;
        transition: all 0.2s;
    }

`;


function Menu() {
    const ptbr = nav.ptbr;
    const en = nav.en;
    const [lang, setLang] = useState(ptbr)
    const setEN = () => setLang(en)
    const setPTBR = () => setLang(ptbr)

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    console.log(click);
    return (
        <>
            <MenuIconStyle onClick={handleClick}>
                <MenuIcon />
            </MenuIconStyle>
            <NavBackground clicked={click} onClick={handleClick}>&nbsp;</NavBackground>
            <Navbar clicked={click} onClick={handleClick}>
                <ul>
                    {lang.navbar.map( li  => {
                        return (
                            <li key={li.title}><a href={li.href} onClick={handleClick}>{li.title} </a></li>
                            )
                        })}
                </ul>
                <div>
                    <p><strong>{lang.language}</strong></p>
                    <a onClick={setPTBR}>português</a>
                    <a onClick={setEN}>english</a>
                </div>
            </Navbar>
        </>
    )
}

export default Menu;