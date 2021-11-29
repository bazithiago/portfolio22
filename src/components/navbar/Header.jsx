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

    h1 {
        font-size: 1.8rem;
        margin-left: 45px;
        cursor: pointer;
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