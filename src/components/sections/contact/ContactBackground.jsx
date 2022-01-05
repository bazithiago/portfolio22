import styled from 'styled-components';

const imgSRC = {
    circle1: '/img/layout/circle-1.svg',
    circle2: '/img/layout/circle-2.svg',
    circle3: '/img/layout/circle-3.svg',
    crosses: '/img/layout/crosses.svg',
    dotsGrid: '/img/layout/dots-grid.svg',
    waves1: '/img/layout/waves-1.svg',
    waves2: '/img/layout/waves-2.svg',
    wavesGrid: '/img/layout/waves-grid.svg',
}

const ContactBackgroundStyles = styled.div`
    transition: all 0.2s;

    #circle1 {
        display: block;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -6;
            left: 20vw;
            bottom: 4vw;
            opacity: 1;
        }
    }

    #circle2 {
        display: block;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -7;
            left: 4vw;
            bottom: 12vw;
            opacity: 1;
        }
    }

    #waves1 {
        display: block;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -8;
            left: 5vw;
            bottom: -2vw;
            opacity: 1;
        }
    }

    #dotsGrid {
        display: block;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -9;
            left: 3vw;
            bottom: -1vw;
            opacity: 1;
        }
    }

    #crosses {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -6;
            right: 3vw;
            bottom: 2vw;
            opacity: 1;
        }
    }

    #circle3 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -7;
            right: 16vw;
            bottom: 12vw;
            opacity: 1;
        }
    }

    #waves2 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: absolute;
            z-index: -8;
            right: 2vw;
            bottom: 4vw;
            opacity: 1;
        }
    }


    #wavesGrid {
        position: absolute;
        z-index: -9;
        right: -102vw;
        bottom: -40vw;
        opacity: 0.65;
        transform: rotate(-15deg);

        @media screen and (min-width: 1024px) {
            right: -22vw;
            bottom: -7vw;
            opacity: 0.85;
            transform: rotate(0deg);

        }
    }
`

export default function ContactBackground() {
    
    return(
        <ContactBackgroundStyles>
            <img src={imgSRC.circle1} alt='circle1' id='circle1' width={35}/>
            <img src={imgSRC.circle2} alt='circle2' id='circle2' width={65}/>
            <img src={imgSRC.waves1} alt='waves1' id='waves1' width={400}/>
            <img src={imgSRC.dotsGrid} alt='dotsGrid' id='dotsGrid' width={200}/>
            <img src={imgSRC.crosses} alt='crosses' id='crosses' width={160}/>
            <img src={imgSRC.circle3} alt='circle3' id='circle3' width={150}/>
            <img src={imgSRC.waves2} alt='waves2' id='waves2' width={450}/>
            <img src={imgSRC.wavesGrid} alt='wavesGrid' id='wavesGrid' width={870}/>
        </ContactBackgroundStyles>
    )
}