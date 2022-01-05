import styled from 'styled-components';

const imgSRC = {
    circle1: '/img/layout/circle-1.svg',
    circle2: '/img/layout/circle-2.svg',
    circle3: '/img/layout/circle-3.svg',
    dotsGrid: '/img/layout/dots-grid.svg',
    waves1: '/img/layout/waves-1.svg',
    waves2: '/img/layout/waves-2.svg',
    wavesGrid: '/img/layout/waves-grid.svg',
}

const ContactBackgroundStyles = styled.div`
    #wavesGrid {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: -999;
            right: -68vw;
            bottom: 28vw;
        }
    }
`

export default function ContactBackground() {
    console.log(imgSRC.circle1)
    
    return(
        <ContactBackgroundStyles>
            <img src={imgSRC.wavesGrid} alt='wavesGrid' id='wavesGrid' width={870}/>
        </ContactBackgroundStyles>
    )
}