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

    h2 {
        margin-bottom: 1.25rem;
        align-self: flex-start;
    }
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;

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
                <p>Sou Thiago, desenvolvedor front-end web, com formação em UX e design gráfico e moro na cidade de São Paulo.</p>
                <p>Meu interesse por código e programação iniciou ainda na graduação, desenvolvendo projetos de interface para web e aplicativos mobile. Continuei minha formação ainda no âmbito do design, com uma especialização em user experience, mas um desejo ainda permanecia: trabalhar diretamente com código. Desejo esse que me fez procurar formação complementar e capacitação prática para migrar de área e atuar como um desenvolvedor front-end.</p>
                <p><strong>Tecnologias que trabalho no momento</strong>:<br/>Javascript (Vanilla/ES6), React JS, SaSS/ CSS in JS (Styled-components), Webpack, NodeJS, Git e github, Storybook.</p>
                <p><strong>O que estou estudando</strong>:<br/>Typescript, Redux, Next.js, GraphQL, Jest</p>
            </section>
            <section className='tabs'>
            <h2>{`estudos & experiências`}</h2>
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
                            <TabSelector isActive={selectedTab === 'Hack'} onClick={() => setSelectedTab('Hack')}> Estação Hack </TabSelector>
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
                            <li>Mentoria abrangendo conteúdos de front e back-end</li>
                            <li>Estudos teóricos sobre mentalidade ágil e suas metodologias: Scrum, Kanban, XP etc.</li>
                            <li>Iniciação ao git e github, HTML, CSS e Javascript</li>
                            <li>Iniciação ao .NET e C#, execução no Visual Studio e utilização de frameworks nesse ambiente</li>
                            <li>Criação e uso de APIs e elaboração de projetos em times</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Sebrae-SP'}>
                        <h3>Designer sênior - Sebrae-SP</h3>
                        <p className='time'>Setembro/20 - maio/21</p>
                        <ul>
                            <li>Desenvolvimento de campanhas com o time de comunicação multidisciplinar para capacitação de empreendedores brasileiros</li>
                            <li>Criação de campanhas, conceitos visuais e seus guia de estilos para divulgação de projetos que apoiam pequenos e micro empreendedores</li>
                            <li>Documentação de projetos para compartilhar com outras unidades e/ou futuros colaboradores</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Rocketseat'}>
                        <h3>Front-end web com ReactJS - Rocketseat</h3>
                        <p className='time'>Janeiro/21 - Fevereiro/21</p>
                        <ul>
                            <li>Apresentação sobre fundamentos do ReactJS, gerenciadores de pacotes e controle de versões</li>
                            <li>Desenvolvimento de aplicação colocando em prática assuntos como: HTML/CSS in JS, componentes e propriedades (props), controle de estado e Hooks</li>
                            <li>Concepção de projeto com consumo de API (Axios) e publicação</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Piwi'}>
                        <h3>UX UI Designer - Piwi</h3>
                        <p className='time'>Janeiro/20 - Junho/20</p>
                        <ul>
                            <li>Colaboração com o time de produto e de desenvolvimento para criação de serviço digital</li>
                            <li>Criação de styleguide para produto digital com componentização de objetos em ReactJS e Storybook</li>
                            <li>Entrevistas com usuários internos e externos para melhoria de desempenho</li>
                            <li>Documentação de etapas de validação para registro e futuras melhorias</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Hack'}>
                        <h3>Imersão Front-end - Estação Hack from Facebook</h3>
                        <p className='time'>Dezembro/20</p>
                        <ul>
                            <li>Estudos sobre HTML e CSS: boas práticas, estrutura, semântica, responsividade, flexbox e grid</li>
                            <li>Apresentação de conteúdo de javascript: variáveis, funções, laços, módulos e eventos</li>
                            <li>Desenvolvimento de aplicação com manipulação ao DOM e gerenciamento de pacotes: npm, yarn</li>
                            <li>Iniciação ao React: criação de componentes, controle de estados, ciclo de vida de componentes e integrações com backend via API</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Mastertech'}>
                        <h3>Introdução ao desenvolvimento Front-end - Mastertech</h3>
                        <p className='time'>Março/19 - Abril/19</p>
                        <ul>
                            <li>Aprendizado sobre conceitos básicos sobre internet e web, HTML e CSS, ferramentas de versionamento, responsividade </li>
                            <li>Apresentação de conteúdo de javascript, funções e eventos, manipulação ao DOM</li>
                            <li>Conteúdos teóricos com conceitos e diferenciações de Front e Back-end</li>
                            <li>Introdução ao React na prática: criação de componentes, ciclo de vida e ambiente de desenvolvimento</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Univali'}>
                        <h3>Especialização em UX Design - Univali</h3>
                        <p className='time'>Fevereiro/17 - Maio/19</p>
                        <ul>
                            <li>Estudos sobre usabilidade, acessibilidade, negócios digitais e arquitetura da informação</li>
                            <li>Realização de pesquisas quantitativas e qualitativas, estudo de serviços semelhantes, entrevistas e coleta de feedbacks</li>
                            <li>Aplicação de diferentes metodologias, tais como, fluxo de navegação, medição de tempo de permanência do usuário, estado de sentimento do usuário</li>
                            <li>Criação de prototipagem de baixa e alta complexidade, wireframes, testagens em grupo e automatizadas</li>
                        </ul>
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== 'Ceart/Udesc'}>
                        <h3>Graduação em design gráfico - Ceart/Udesc</h3>
                        <p className='time'>Março/10 - Dezembro/13</p>
                        <ul>
                            <li>Formação ampla em design gráfico e suas atribuições, como branding, embalagens, negócios, produtos editoriais e digitais</li>
                            <li>Desenvolvimento de projetos práticos ligados ao mercado, em equipe e grupos de apoio</li>
                            <li>Aprendizado teórico com pensamento crítico sobre a responsabilidade da profissão e estudo prático de softwares digitais presentes no mercado de trabalho</li>
                        </ul>
                    </TabPanel>
                </div>
            </section>
            
        </AboutStyles>
    )
}