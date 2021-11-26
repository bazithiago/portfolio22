import styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import Header from '../navbar/Header' 
import imgTeste from '../../../public/photos/testeimg.png'

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
const BgImage = styled.div`

`

const Home = () => {
    return(
        <Div100vh>
            <HomeStyles>
                <Header />
                <BgImage>
                    <Image 
                        src={imgTeste} 
                        alt='teste'
                        width={350}
                        height={150}
                        layout='fixed'
                    >
                    </Image>
                </BgImage>
            </HomeStyles>
        </Div100vh>
    );
}


export default Home;