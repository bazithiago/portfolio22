import { useState } from 'react'
import { FullPage, Slide } from 'react-full-page'

import { allContent } from '../../database/db'

import Header from '../navbar/Header'
import Banner from '../sections/banner/Banner'
import Project from '../sections/projects/Project'
import { ProjectsStyles } from '../sections/projects/Projects'
import Contact from './contact/Contact'

const Home = () => {
	const [content, setContent] = useState(allContent.ptbr);

	function handleLanguage(e) {
		const language = e.target.dataset.lang;

		if (language === 'ptbr') {
			setContent(allContent.ptbr);
		} else if (language === 'en') {
			setContent(allContent.en);
		}
	}

	return (
        <>
            <Header handleLanguage={handleLanguage} content={content} />
            <FullPage duration={400} >
                <Slide id="about">
                    <Banner content={content} />
                </Slide>

    
                {content.projects.map( project => {
                    return(
                        <Slide key={project.title} id="projects">
                            <ProjectsStyles>
                                <Project project={project} />
                            </ProjectsStyles>
                        </Slide>
                )})}
           
                <Slide id="contact">
                    <Contact content={content} />
                    
                </Slide>
            </FullPage>

        </>
	);
};

export default Home;
