import styled from 'styled-components';
import Database from '../../../database/index';
import Button from '../../assets/buttons/PrimaryButton';
import TechGroup from '../../assets/technologies/TechGroup'

const FinalSlideStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-image: url('/img/layout/mobile-background.png');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    
    
    @media screen and (min-width: 1024px) {
        background-image: url('/img/layout/background.png');
    }
`

const ContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10% 15%;
    width: 100vw;

    h2 {
        margin-bottom: 1.25rem;
        font-size: 2.25rem;
    }

    & > a {
        font-size: 1.6rem;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        overflow-wrap: break-word;
        width: fit-content;
        padding: 5px 20px 5px 20px;
        margin-bottom: 2rem;

        :hover {
            background-color: var(--primary);
            color: var(--secondary);
            transition: all 0.3s ease-in-out;
            width: fit-content;
        }
    }

    span {
        margin-bottom: 1.25rem;
    }

    .socialMedias {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
    }

    @media screen and (min-width: 1024px) {
        padding: 5% 10% 8%; 

        .socialMedias {
            width: 32%;
        }
    }
`

const Footer = styled.footer`
    padding-bottom: 2%;
`

export default function Contact({ content }) {
    return(
        <>
        
            <FinalSlideStyles>
                <ContactStyles id='contact'>
                    <h2>{content.contact.call}</h2>
                    <a href="mailto:thiagovieira.dev@gmail.com" rel="noreferrer" target="_blank">thiagovieira.dev@gmail.com</a>
                    <span>{content.contact.message}</span>
                    <div className='socialMedias'>
                        {Database.socialMedias.map( socialMedia => {
                            return(
                                <Button 
                                key={socialMedia.name}
                                alt={socialMedia.name}
                                name={socialMedia.name}
                                src={socialMedia.src} 
                                href={socialMedia.href} 
                                target={socialMedia.target} 
                                />
                                ) 
                            })} 
                </div>
                </ContactStyles> 
                
                <Footer>
                    <TechGroup center={true} data={Database.technologies} label={content.contact.label}/>
                </Footer>
                
            </FinalSlideStyles>

        </>
    )
}