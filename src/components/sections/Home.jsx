import { useState } from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import Header from '../navbar/Header' 
import imgTeste from '../../img/photos/testeimg.png'
import { allContent } from '../../database/db'

// import Project from '../sections/Project';
// import ProjectsDatabase from '../../Database/projects';


const HomeStyles = styled.div`
    width: 100vw;
    height: 100%;
    border: 15px solid var(--primary);
    /* padding: 0 35px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Banner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 1024px){

    }
`

const TextBanner = styled.div`
    width: 100%;
    padding: 20% 0 0 10%;
    margin-bottom: -20%;

    p {
        font-size: 2.5rem;
        line-height: 2.25rem;
        padding-right: 10%;
    }
    
    .highlight {
        font-weight: 700;
    }
    .normal {
        font-weight: 300;
        letter-spacing: ${(props) => (props.content === allContent.pt ? "-0.05rem" : "auto")};
    }

    @media screen and (min-width: 1024px){
        width: 40%;
        padding: 2% 0 0 10%;
        margin-bottom: 0;

        p {
            font-size: 3rem;
            line-height: 3rem;
            padding-right: 0;
        }
        .normal {
            font-size: ${(props) => (props.content === allContent.pt ? "2.7rem" : "3rem")};
        }
    }
`

const BgImage = styled.div`
    width: 100%;
    
    img {
        width: 110%;
        object-fit: cover;
        margin-left: 2%;
    }

    @media screen and (min-width: 1024px){
        width: 60%;

        img {
            width: 100%;
            margin-left: 0%;
        }
    }
`

const Home = () => {
    const [content, setContent] = useState(allContent.ptbr)

    function handleLanguage(e) {
        const language = e.target.dataset.lang
        
        if(language === 'allContent.ptbr') {
            setContent(allContent.ptbr);
        } else if (language === 'allContent.en') {
            setContent(allContent.en);
        }
    }

    
    return(
        <Div100vh>
            <HomeStyles>
                <Header handleLanguage={handleLanguage} content={content}/>
                <Banner>
                    <TextBanner>
                        <p className="highlight">{content.home.banner.first}</p>
                        <p className="highlight">{content.home.banner.second}</p>
                        <p className="normal">{content.home.banner.third}</p>
                    </TextBanner>
                    <BgImage>
                        <img src={imgTeste} alt='teste' />         
                    </BgImage>

                </Banner>
            </HomeStyles>
        </Div100vh>
    );
}


export default Home;