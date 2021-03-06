import { useRef } from 'react'
import styled from 'styled-components';
import { useTabs, TabPanel } from "react-headless-tabs"
import { TabSelector } from "./TabSelector.jsx"

const AboutStyles = styled.div`
    width: 100vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13vh 45px;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        .controls {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-bottom: 2rem;

            .buttonControls {
                background-color: transparent;
            }
        }
        
        nav {
            display: flex;
            overflow: auto;
            white-space: nowrap;
            padding: 10px 0;
            margin: 0 25px;

            button {
                font-size: 1rem;
                background-color: transparent;
                padding-bottom: 0.6rem;
                color: black;
                
                :hover {
                    border-bottom: 2px solid black;
                }
            }

            button + button {
                margin-left: 3rem;
            }

            ::-webkit-scrollbar { 
                display: none;
            }
        }

        .contentPanel {
            width: 100%;
            height: 100%;

            p.time {
                font-style: italic;
                margin-bottom: 1.25rem;
            }

            li {
                margin-left: 20px;
                margin-bottom: 0.6rem;
            }
        }
    }

    section.bioContent {
        display: flex;
        align-items: flex-start;
        margin-bottom: 3rem;
        
        p { 
            margin-bottom: 1.25rem;
        }
    }
    
    section.tabs {
        h2 {
            margin-top: 2rem;
        }
    }

    h2 {
        margin-bottom: 1.25rem;
        align-self: flex-start;
    }
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        height: 60vh;

        section {
            width: 50%;
            height: 45vh;
            min-height: 100%;
        }

        nav {
            /* white-space: normal; */
            /* flex-wrap: wrap; */

            button + button {
                margin-left: 3rem;
            }
        }

        section.tabs {
            padding: 0 0 0 3rem;

            h2 {
                margin-top: 0;
            }
        }

        section.bioContent {
            padding: 0 3rem 0 0;
            margin-bottom: 0;
        }

    }

    @media screen and (min-width: 1600px) {
        padding: 13vw 13vw 0;
    }

`





export default function About() {
    const [selectedTab, setSelectedTab] = useTabs([
        'Gama',
        'Sebrae-SP',
        'Rocketseat',
        'Piwi',
        'Hack',
        'Mastertech',
        'Univali',
        'Ceart/Udesc'
      ]);
      const myRef = useRef(null)
      const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
      };

    return(
        <AboutStyles id='about'>
            <section className='bioContent'>
                <h2>sobre</h2>
                {/* <p>Oi, me chamo Thiago, sou desenvolvedor front-end web, com forma????o em UX e design gr??fico e moro na cidade de S??o Paulo.</p>
                <p>Meu interesse por c??digo e programa????o iniciou ainda na gradua????o, desenvolvendo projetos de interface para web e aplicativos mobile. Continuei minha forma????o ainda no ??mbito do design, com uma especializa????o em user experience, mas um desejo ainda permanecia: trabalhar diretamente com c??digo. Desejo esse que me fez procurar forma????o complementar e capacita????o pr??tica para migrar de ??rea e atuar como um desenvolvedor front-end.</p> */}
                <p>Oi, me chamo Thiago, sou desenvolvedor front-end web e trabalho desde 2017 com projetos de interface e aplicativos mobile. Sou formado em design gr??fico, com especializa????o em UX design e agora transformo pesquisas e desenhos de telas em c??digo.</p>
                <p><strong>Tecnologias que trabalho no momento</strong>:<br/>Javascript (Vanilla/ES6), React JS, SaSS/ CSS in JS (Styled-components), Webpack, NodeJS, Git e github, Storybook.</p>
                <p><strong>O que estou estudando</strong>:<br/>Typescript, Redux, Next.js, GraphQL, Jest</p>
            </section>
            <section className='tabs'>
            <h2>{`estudos & trabalhos`}</h2>
                <div className="controls">
                    <button onClick={() => scroll(-100)} className='buttonControls'> 
                        <img src="/img/icons/chevron-left.svg" alt="left" width='auto'/>
                    </button>
                    <nav ref={myRef}>
                        <div id="content">
                            <TabSelector isActive={selectedTab === 'Gama'} onClick={() => setSelectedTab('Gama')}> Gama Academy </TabSelector>
                            <TabSelector isActive={selectedTab === 'Sebrae-SP'} onClick={() => setSelectedTab('Sebrae-SP')}> Sebrae-SP </TabSelector>
                            <TabSelector isActive={selectedTab === 'Rocketseat'} onClick={() => setSelectedTab('Rocketseat')}> Rocketseat </TabSelector>
                            <TabSelector isActive={selectedTab === 'Piwi'} onClick={() => setSelectedTab('Piwi')}> Piwi </TabSelector>
                            <TabSelector isActive={selectedTab === 'Hack'} onClick={() => setSelectedTab('Hack')}> Esta????o Hack </TabSelector>
                            <TabSelector isActive={selectedTab === 'Mastertech'} onClick={() => setSelectedTab('Mastertech')}> Mastertech </TabSelector>
                            <TabSelector isActive={selectedTab === 'Univali'} onClick={() => setSelectedTab('Univali')}> Univali </TabSelector>
                            <TabSelector isActive={selectedTab === 'Ceart/Udesc'} onClick={() => setSelectedTab('Ceart/Udesc')}> Ceart/Udesc </TabSelector>
                        </div>
                    </nav>
                    <button onClick={() => scroll(100)} className='buttonControls'>
                        <img src="/img/icons/chevron-right.svg" alt="left" width='auto'/>
                    </button>
                </div>
                
                <div className='contentPanel'>
                    <TabPanel hidden={selectedTab !== 'Gama'}>
                        <h3>Desenvolvimento Full Stack - Gama Academy</h3>
                        <p className='time'>Outubro/21 - Dezembro/21</p>
                        <ul>
                            <li>Mentoria abrangendo conte??dos de front e back-end</li>
                            <li>Estudos te??ricos sobre mentalidade ??gil e suas metodologias: Scrum, Kanban, XP etc.</li>
                            <li>Inicia????o ao git e github, HTML, CSS e Javascript</li>
                            <li>Inicia????o ao .NET e C#, execu????o no Visual Studio e utiliza????o de frameworks nesse ambiente</li>
                            <li>Cria????o e uso de APIs e elabora????o de projetos em times</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Sebrae-SP'}>
                        <h3>Designer s??nior - Sebrae-SP</h3>
                        <p className='time'>Setembro/20 - maio/21</p>
                        <ul>
                            <li>Desenvolvimento de campanhas com o time de comunica????o multidisciplinar para capacita????o de empreendedores brasileiros</li>
                            <li>Cria????o de campanhas, conceitos visuais e seus guia de estilos para divulga????o de projetos que apoiam pequenos e micro empreendedores</li>
                            <li>Documenta????o de projetos para compartilhar com outras unidades e/ou futuros colaboradores</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Rocketseat'}>
                        <h3>Front-end web com ReactJS - Rocketseat</h3>
                        <p className='time'>Janeiro/21 - Fevereiro/21</p>
                        <ul>
                            <li>Apresenta????o sobre fundamentos do ReactJS, gerenciadores de pacotes e controle de vers??es</li>
                            <li>Desenvolvimento de aplica????o colocando em pr??tica assuntos como: HTML/CSS in JS, componentes e propriedades (props), controle de estado e Hooks</li>
                            <li>Concep????o de projeto com consumo de API (Axios) e publica????o</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Piwi'}>
                        <h3>UX UI Designer - Piwi</h3>
                        <p className='time'>Janeiro/20 - Junho/20</p>
                        <ul>
                            <li>Colabora????o com o time de produto e de desenvolvimento para cria????o de servi??o digital</li>
                            <li>Cria????o de styleguide para produto digital com componentiza????o de objetos em ReactJS e Storybook</li>
                            <li>Entrevistas com usu??rios internos e externos para melhoria de desempenho</li>
                            <li>Documenta????o de etapas de valida????o para registro e futuras melhorias</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Hack'}>
                        <h3>Imers??o Front-end - Esta????o Hack from Facebook</h3>
                        <p className='time'>Dezembro/20</p>
                        <ul>
                            <li>Estudos sobre HTML e CSS: boas pr??ticas, estrutura, sem??ntica, responsividade, flexbox e grid</li>
                            <li>Apresenta????o de conte??do de javascript: vari??veis, fun????es, la??os, m??dulos e eventos</li>
                            <li>Desenvolvimento de aplica????o com manipula????o ao DOM e gerenciamento de pacotes: npm, yarn</li>
                            <li>Inicia????o ao React: cria????o de componentes, controle de estados, ciclo de vida de componentes e integra????es com backend via API</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Mastertech'}>
                        <h3>Introdu????o ao desenvolvimento Front-end - Mastertech</h3>
                        <p className='time'>Mar??o/19 - Abril/19</p>
                        <ul>
                            <li>Aprendizado sobre conceitos b??sicos sobre internet e web, HTML e CSS, ferramentas de versionamento, responsividade </li>
                            <li>Apresenta????o de conte??do de javascript, fun????es e eventos, manipula????o ao DOM</li>
                            <li>Conte??dos te??ricos com conceitos e diferencia????es de Front e Back-end</li>
                            <li>Introdu????o ao React na pr??tica: cria????o de componentes, ciclo de vida e ambiente de desenvolvimento</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Univali'}>
                        <h3>Especializa????o em UX Design - Univali</h3>
                        <p className='time'>Fevereiro/17 - Maio/19</p>
                        <ul>
                            <li>Estudos sobre usabilidade, acessibilidade, neg??cios digitais e arquitetura da informa????o</li>
                            <li>Realiza????o de pesquisas quantitativas e qualitativas, estudo de servi??os semelhantes, entrevistas e coleta de feedbacks</li>
                            <li>Aplica????o de diferentes metodologias, tais como, fluxo de navega????o, medi????o de tempo de perman??ncia do usu??rio, estado de sentimento do usu??rio</li>
                            <li>Cria????o de prototipagem de baixa e alta complexidade, wireframes, testagens em grupo e automatizadas</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Ceart/Udesc'}>
                        <h3>Gradua????o em design gr??fico - Ceart/Udesc</h3>
                        <p className='time'>Mar??o/10 - Dezembro/13</p>
                        <ul>
                            <li>Forma????o ampla em design gr??fico e suas atribui????es, como branding, embalagens, neg??cios, produtos editoriais e digitais</li>
                            <li>Desenvolvimento de projetos pr??ticos ligados ao mercado, em equipe e grupos de apoio</li>
                            <li>Aprendizado te??rico com pensamento cr??tico sobre a responsabilidade da profiss??o e estudo pr??tico de softwares digitais presentes no mercado de trabalho</li>
                        </ul>
                    </TabPanel>
                </div>
            </section>
            
        </AboutStyles>
    )
}