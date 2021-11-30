import styled from 'styled-components';

const FinalSlideStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

const ContactStyles = styled.div`
    display: flex;
    align-items: center;
    
    flex: 1;

    h2 {
        background-color: blue;
    }
`

const Footer = styled.footer`
    background-color: red;
`

export default function Contact() {
    return(
        <FinalSlideStyles>
            <ContactStyles>
                <h2>contato</h2>
            </ContactStyles> 
            
            <Footer>
                lalalala
            </Footer>
        </FinalSlideStyles>
    )
}