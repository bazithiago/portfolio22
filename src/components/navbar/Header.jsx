import styled from 'styled-components';
import Menu from './Menu'

const HeaderStyles = styled.div`
    width: 100%;
    border-right: 15px solid;
    border-left: 15px solid;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    background-color: #FFF;

    h1 {
        font-size: 1.8rem;
        margin-left: 45px;
    }
`

export default function Header({ handleLanguage, content }) {
    return(
        <HeaderStyles>
            <h1>thiagovieira</h1>
            <Menu handleLanguage={handleLanguage} content={content}/>
        </HeaderStyles>
    )
}