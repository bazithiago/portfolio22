import { useRef } from 'react'
import styled from 'styled-components';
import { useTabs, TabPanel } from "react-headless-tabs"
import { TabSelector } from "./TabSelector.jsx"

const AboutStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 45px;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 50vh;

        nav {
            width: 100%;
            display: flex;
            overflow: auto;
            white-space: nowrap;
            padding: 10px 0 25px 0;

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
    }
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;

        section {
            width: 50%;
            height: 100vh;
        }

        nav {
            /* white-space: normal; */
            /* flex-wrap: wrap; */

            button + button {
                margin-left: 3rem;
            }
        }

    }

`





export default function About() {
    const [selectedTab, setSelectedTab] = useTabs([
        'account',
        'company',
        'team',
        'billing'
      ]);
      const myRef = useRef(null)
      const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
      };

    return(
        <AboutStyles id='about'>
            <section>

            </section>
            <section>
                <button onClick={() => scroll(-40)}> 
                    left
                </button>
                <nav ref={myRef}>
                    <div id="content">
                        <TabSelector
                            isActive={selectedTab === 'account'}
                            onClick={() => setSelectedTab('account')}
                        >
                            My Account
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === 'company'}
                            onClick={() => setSelectedTab('company')}
                        >
                            Company
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === 'team'}
                            onClick={() => setSelectedTab('team')}
                        >
                            Team Members
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === 'billing'}
                            onClick={() => setSelectedTab('billing')}
                        >
                            Billing
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === 'team'}
                            onClick={() => setSelectedTab('team')}
                        >
                            Team Members
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === 'billing'}
                            onClick={() => setSelectedTab('billing')}
                        >
                            Billing
                        </TabSelector>
                    </div>
                </nav>
                <button onClick={() => scroll(40)}>
                    right
                </button>
                <div>
                    <TabPanel hidden={selectedTab !== 'account'}>My Account</TabPanel>
                    <TabPanel hidden={selectedTab !== 'company'}>Company</TabPanel>
                    <TabPanel hidden={selectedTab !== 'team'}>Team Members</TabPanel>
                    <TabPanel hidden={selectedTab !== 'billing'}>Billing</TabPanel>
                </div>
            </section>
            
        </AboutStyles>
    )
}