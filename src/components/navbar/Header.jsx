import styled from 'styled-components';
import Menu from './Menu'

const HeaderStyles = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    backdrop-filter: blur(4px);
    padding: 0 35px;

    h1 {
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 45px;
    }
`

const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Header({ handleLanguage, content }) {
    return(
        <HeaderStyles>
            <h1 onClick={goToTop}>thiagovieira</h1>
            <Menu handleLanguage={handleLanguage} content={content}/>
        </HeaderStyles>
    )
}