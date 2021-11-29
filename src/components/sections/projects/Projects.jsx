import styled from 'styled-components'
import ProjectsDatabase from '../../../database/projects'
import Project from './Project'
import { Slide } from 'react-full-page';


export const ProjectsStyles = styled.div`
	display: flex;
	justify-content:center;
	align-items:center;
	height: 100%;
`;

export default function Projects() {
	return(
		<ProjectsStyles>
			 {ProjectsDatabase.map((project) => {
                    return(
                        <Slide>
                            <Project project={project} />
                        </Slide>
                )})}
		</ProjectsStyles>
	)
}