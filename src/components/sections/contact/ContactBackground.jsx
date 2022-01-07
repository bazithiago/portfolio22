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
    display: flex;
    justify-content: space-between;
    transition: all 0.2s;
    position: relative;
    z-index: 1;
    bottom: 100vh;
    margin-bottom: -100%;

    & > div {
        width: 50%;
        border: 1px solid red;
    }

    #circle1 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 4;
            opacity: 1;
        }
    }

    #circle2 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 3;
            opacity: 1;
        }
    }

    #waves1 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 2;
            opacity: 1;
        }
    }

    #dotsGrid {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 1;
            opacity: 1;
        }
    }

    #crosses {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 4;
            opacity: 1;
            float: right;
            right: 20vw;
            bottom: 0;
        }
    }

    #circle3 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 3;
            opacity: 1;
            float: right;
        }
    }

    #waves2 {
        display: none;

        @media screen and (min-width: 1024px) {
            display: block;
            position: relative;
            z-index: 2;
            opacity: 1;
            float: right;
        }
    }


    #wavesGrid {
        position: relative;
        z-index: 1;
        opacity: 0.65;
        transform: rotate(-15deg);

        @media screen and (min-width: 1024px) {
            opacity: 0.85;
            transform: rotate(0deg);
            float: right;
        }
    }
`

export default function ContactBackground() {
    
    return(
        <ContactBackgroundStyles>
            <div className="group1">
                <img src={imgSRC.circle1} alt='circle1' id='circle1' width={35}/>
                <img src={imgSRC.circle2} alt='circle2' id='circle2' width={65}/>
                <img src={imgSRC.waves1} alt='waves1' id='waves1' width={400}/>
                <img src={imgSRC.dotsGrid} alt='dotsGrid' id='dotsGrid' width={200}/>
            </div>
            <div className="group2">
                <img src={imgSRC.crosses} alt='crosses' id='crosses' width={160}/>
                <img src={imgSRC.circle3} alt='circle3' id='circle3' width={150}/>
                <img src={imgSRC.waves2} alt='waves2' id='waves2' width={450}/>
                <img src={imgSRC.wavesGrid} alt='wavesGrid' id='wavesGrid' width={870}/>
            </div>
        </ContactBackgroundStyles>
    )
}