import { useState } from 'react'
import styled from 'styled-components'
import { allContent } from '../../database/db'
import Header from '../navbar/Header'
import Banner from './banner/Banner'
import Project from './projects/Project'
import { ProjectsStyles } from './projects/Projects'
import Contact from './contact/Contact'
import About from './about/About'

const HomeStyles = styled.div`
  width: 100vw;
`

const Home = () => {
  const [content, setContent] = useState(allContent.ptbr);
  const [clicked, setClick] = useState(false);

  const handleClick = () => setClick(!clicked);
  
	function handleLanguage(e) {
		const language = e.target.dataset.lang;

		if (language === 'ptbr') {
			setContent(allContent.ptbr);
      handleClick();
		} else if (language === 'en') {
			setContent(allContent.en);
      handleClick();
		}
	}

	return (
    <HomeStyles>
      <Header handleLanguage={handleLanguage} content={content} />
      <Banner content={content} />
      <About content={content} />

      {content.projects.map( project => {
              return(
                <div key={project.title} id='projects'>
                    <ProjectsStyles>
                      <Project project={project} />
                    </ProjectsStyles>
                </div>
      )})}

      <Contact content={content}  />

    </HomeStyles>
    
  );
}

export default Home;