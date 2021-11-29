import { useState } from 'react';
import Header from '../navbar/Header';
import Banner from '../sections/banner/Banner';
import { allContent } from '../../database/db';
import { FullPage, Slide } from 'react-full-page';
import ProjectsDatabase from '../../database/projects';
import Project from '../sections/projects/Project';
import Projects from '../sections/projects/Projects';
import { ProjectsStyles } from '../sections/projects/Projects'

const Home = () => {
	const [content, setContent] = useState(allContent.ptbr);

	function handleLanguage(e) {
		const language = e.target.dataset.lang;

		if (language === 'allContent.ptbr') {
			setContent(allContent.ptbr);
		} else if (language === 'allContent.en') {
			setContent(allContent.en);
		}
	}

	return (
        <>
            <Header handleLanguage={handleLanguage} content={content} />
            <FullPage duration={700} >
                <Slide>
                    <Banner content={content} />
                </Slide>

    
                {ProjectsDatabase.map((project) => {
                    return(
                        <Slide>
                            <ProjectsStyles>
                                <Project project={project} />
                            </ProjectsStyles>
                        </Slide>
                )})}
           
                <Slide>
                    <p id="contact">contato</p>
                    
                </Slide>
            </FullPage>

        </>
	);
};

export default Home;
