import styled from 'styled-components';

const imgSRC = {
    photo: '/img/layout/photo.png',
    crosses: '/img/layout/crosses.svg',
    dotsGrid: '/img/layout/dots-grid.svg',
    wavesGrid: '/img/layout/waves-grid-banner.svg',
}

const BannerBackgroundStyles = styled.div`
    transition: all 0.2s;

    #photo {
        position: absolute;
        z-index: 4;
        width: 55vw;
        bottom: 10vw;
        right: 8vw;

        @media screen and (min-width: 1024px) {
            width: 30vw;
            right: 16vw;
            top: 11vw;
            bottom: auto;
        }
    }

    #dotsGrid {
        position: absolute;
        z-index: 3;
        width: 40vw;
        left: 14vw;
        bottom: 10vw;

        @media screen and (min-width: 1024px) {
            width: 285px;
            right: 37vw;
            top: 20vw;
            left: auto;
        }
    }

    #crosses {
        position: absolute;
        z-index: 2;
        transform: rotate(90deg);
        width: 24vw;
        left: 24vw;
        bottom: 50vw;
        
        @media screen and (min-width: 1024px) {
            right: 7.5vw;
            top: 12.5vw;
            width: 160px;
            left: auto;
            bottom: auto;
        }
    }

    #wavesGrid {
        position: absolute;
        z-index: 1;
        right: 0;
        bottom: -5vw;
        width: 90vw;
        opacity: 0.4;

        @media screen and (min-width: 1024px) {
            right: 0;
            top: 11vw;
            width: 750px;
            bottom: auto;
            left: auto;
        }
    }
`

export default function BannerBackground() {
    
    return(
        <BannerBackgroundStyles>
            <img src={imgSRC.photo} alt='Thiago avatar' id='photo' />
            <img src={imgSRC.dotsGrid} alt='dotsGrid' id='dotsGrid'/>
            <img src={imgSRC.crosses} alt='crosses' id='crosses' />
            <img src={imgSRC.wavesGrid} alt='wavesGrid' id='wavesGrid' />
        </BannerBackgroundStyles>
    )
}