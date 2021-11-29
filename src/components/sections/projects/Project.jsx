import styled from 'styled-components';
import TechGroup from '../../assets/technologies/TechGroup';
import Button from '../../assets/buttons/PrimaryButton'

const ProjectStyles = styled.div`
    display: flex;
    max-width: 500px;
    flex-direction: column;
       
    h3 {
        font-weight: 400;
        margin: 5px 0 20px 0;
    }

    & > div > img {
        width: 100%;
    }
    
    & > div > :nth-child(5)  {
        display: flex;
        margin-top: 15px;
                
        & > a + a {
            margin-left: 20px;
        }
    }

    @media screen and (min-width: 1024px) {
        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        h3 {
            text-align: center;
        }
    }
    
`

const Project = ({ project }) => {
    console.log(project.id)

    return(
        <ProjectStyles>
            <div>
                <img 
                    alt={project.title}
                    src={project.image}
                />
                <h1>{project.title}</h1>
                <h3>{project.description}</h3>

                <TechGroup data={project.technologies} />

                <div>
                    {project.links.map( socialMedia => {
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
            </div>
        </ProjectStyles>
    )
}

export default Project

