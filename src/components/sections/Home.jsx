import { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { allContent } from '../../database/db'
import Header from '../navbar/Header'
import Banner from './banner/Banner'
import Project from './projects/Project'
import { ProjectsStyles } from './projects/Projects'
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

      <ReactFullpage
      scrollingSpeed = {700}
      
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section' id='about'>
              <Banner content={content} />
            </div>

            {content.projects.map( project => {
              return(
                <div key={project.title} className='section' id='projects'>
                    <ProjectsStyles>
                      <Project project={project} />
                    </ProjectsStyles>
                </div>
            )})}

            <div className='section' id='contact'>
              <Contact content={content} />
            </div>
              
          </ReactFullpage.Wrapper>
        );
      }}
      />


    </>
    
  );
}

export default Home;