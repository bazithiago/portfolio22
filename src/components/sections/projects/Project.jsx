import styled from 'styled-components';
import TechGroup from '../../assets/technologies/TechGroup';
import Button from '../../assets/buttons/PrimaryButton'

const ProjectStyles = styled.div`
    display: flex;
    max-width: 500px;
    flex-direction: column;
    padding: 0 45px;
    
    .content {
        height: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 4vh;

        .title {
            h1 {
                font-size: 2rem;
                line-height: 1.75rem;
                text-align: center;
                margin-bottom: 1rem;
            }

            h3 {
                font-weight: 400;
                font-size: 0.85rem;
                text-align: center;
            }
        }


        .technologies {
            margin-top: 4vh;

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
        height: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

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

                h3 {
                    text-align: left;
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
                    <h3>{project.description}</h3>
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

