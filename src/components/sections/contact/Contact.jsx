import styled from 'styled-components';
import Database from '../../../database/index';
import Button from '../../assets/buttons/PrimaryButton';
import TechGroup from '../../assets/technologies/TechGroup'
import ContactBackground from './ContactBackground';

const FinalSlideStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

const ContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 5% 10% 0 10%;

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
        width: 80%;
    }
`

const Footer = styled.footer`
    padding-bottom: 2%;
`

export default function Contact({ content }) {
    return(
        <>
        
            <FinalSlideStyles>
                <ContactStyles>
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
                    <TechGroup data={Database.technologies} label={content.contact.label}/>
                </Footer>
                
            </FinalSlideStyles>

            <ContactBackground />
        </>
    )
}