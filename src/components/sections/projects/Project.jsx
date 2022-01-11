import styled from 'styled-components';
import TechGroup from '../../assets/technologies/TechGroup';
import Button from '../../assets/buttons/PrimaryButton'

const ProjectStyles = styled.div`
    display: flex;
    max-width: 500px;
    flex-direction: column;
    padding: 0 45px;
    height: 100vh;
    
    .content {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 4vh;
        /* border: 1px solid blue; */

        .title {
            h1 {
                font-size: 2rem;
                line-height: 1.75rem;
                text-align: center;
                margin-bottom: 1rem;
            }

            p.description {
                font-weight: 400;
                font-size: 0.95rem;
                text-align: center;
            }
        }


        .technologies {
            margin-top: 4vh;
            margin-bottom: 12vh;

            .externalLinks  {
                display: flex;
                margin-top: 15px;
                justify-content: center;
                        
                & > a + a {
                    margin-left: 20px;
                }
            }
        }
    }
    
    .images {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 4vh;

        img {
            width: 100%;
        }
    }
    
    

    @media screen and (min-width: 1024px) {
        max-width: 100%;
        flex-direction: row-reverse;

        & > div {
            width: 50%;
        }

        .content {
            height: 100vh;
            padding: 12% 10vw 8vh 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

        
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0;
                flex: 1;

                
                h1 {
                    font-size: 3rem;
                    line-height: 2.75rem;
                    margin-bottom: 2rem;
                    text-align: left;
                }

                p.description {
                    text-align: left;
                    font-size: 1rem;
                }
            }

            .technologies {
                margin-top: 10vh;


                .externalLinks {
                    justify-content: flex-start;
                }

            }
        }

        .images {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    /* @media screen and (min-width: 1600px) {
        width: 80vw;
    } */
    
`

const Project = ({ project }) => {

    return(
        <ProjectStyles>
            <div className="images">
                <img 
                    alt={project.title}
                    src={project.image}
                />
            </div>
            <div className="content">
                <div className="title">
                    <h1>{project.title}</h1>
                    <p className='description'>{project.description}</p>
                </div>
                <div className="technologies">
                    <TechGroup data={project.technologies} label={project.label}/>
                    <div className='externalLinks'>
                        {project.links.map( external => {
                            return(
                                <Button 
                                    key={external.name}
                                    alt={external.name}
                                    name={external.name}
                                    src={external.src} 
                                    href={external.href} 
                                    target={external.target}
                                />
                            ) 
                        })}
                    </div>
                </div>
            </div>
            
        </ProjectStyles>
    )
}

export default Project

