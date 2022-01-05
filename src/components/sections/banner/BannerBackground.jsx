import styled from 'styled-components';

const imgSRC = {
    photo: '/img/layout/photo.png',
    crosses: '/img/layout/crosses.svg',
    dotsGrid: '/img/layout/dots-grid.svg',
    wavesGrid: '/img/layout/waves-grid.svg',
}

const BannerBackgroundStyles = styled.div`
    transition: all 0.2s;

    #photo {
        position: absolute;
        z-index: 4;

        @media screen and (min-width: 1024px) {
            width: 45vw;
            right: 7vw;
            top: 11vw;
        }
    }

    #dotsGrid {
        position: absolute;
        z-index: 3;

        @media screen and (min-width: 1024px) {
            right: 37vw;
            top: 20vw;
        }
    }

    #crosses {
        position: absolute;
        z-index: 2;
        transform: rotate(90deg);

        
        @media screen and (min-width: 1024px) {
            right: 7.5vw;
            top: 12.5vw;
        }
    }

    #wavesGrid {
        position: absolute;
        z-index: 1;
        right: -102vw;
        bottom: -40vw;

        @media screen and (min-width: 1024px) {
            right: -16vw;
            top: 11vw;
        }
    }
`

export default function BannerBackground() {
    
    return(
        <BannerBackgroundStyles>
            <img src={imgSRC.photo} alt='Thiago avatar' id='photo' />
            <img src={imgSRC.dotsGrid} alt='dotsGrid' id='dotsGrid' width={285}/>
            <img src={imgSRC.crosses} alt='crosses' id='crosses' width={160}/>
            <img src={imgSRC.wavesGrid} alt='wavesGrid' id='wavesGrid' width={850}/>
        </BannerBackgroundStyles>
    )
}