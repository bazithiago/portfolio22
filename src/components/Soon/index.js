import styled from 'styled-components';
import Div100vh from 'react-div-100vh'

import Database from '../../Database/index';
import Button from '../assets/buttons/PrimaryButton';
import TechGroup from '../assets/technologies/TechGroup.jsx';

const SoonStyles = styled.div`
    width: 100vw;
    height: 100%;
    border: 15px solid var(--primary);
    padding: 35px 35px 90px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;


    span {
        color: var(--primary);
    }

    h1 {
        font-size: 2.8rem;
        font-weight: 700;
        line-height: 98%;
    }

    h2 {
        font-size: 2.25rem;
        font-weight: 400;
        line-height: 98%;
    }

    & > div {
        margin: 55px 0 30px 0;

        & > a + a {
            margin-top: 10px;
            }
        
        @media screen and (min-width: 512px) {
            display: flex;
            margin: 55px 0 30px 0;

            & > a + a {
                margin-top: 0px;
                margin-left: 20px;
            }
        }

    }

    & > a {
        font-size: 1.45rem;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        overflow-wrap: break-word;
        width: fit-content;

        :hover {
            background-color: var(--primary);
            color: var(--secondary);
            transition: all 0.3s ease-in-out;
            width: fit-content;

            img {
                fill: red;
            }
        }
    }

    footer {
        position: absolute;
        bottom: 15px;
    }
`

const Soon = () => {
    return(
        <Div100vh>
        <SoonStyles>
            <span>{`Hi, I'm Thiago`}</span>
            <h1>{`While I'm coding a new portfolio`}</h1>
            <h2>take a look at my social networks</h2>

            <div>
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

            <span>or write me</span>
            <a href="mailto:thiagovieira.dev@gmail.com" rel="noreferrer" target="_blank">thiagovieira.dev@gmail.com</a>

            <footer>
                <TechGroup data={Database.technologies} />
            </footer>

        </SoonStyles>
        </Div100vh>
    );
}


export default Soon;