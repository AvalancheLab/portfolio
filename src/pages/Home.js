import React from 'react'
import styled from 'styled-components' 
import { SkillCard, ProjectCard, Hero, PageWrapper, Section } from '../components'
import { FaTools as ProjectsIcon, FaToolbox as SkillsIcon } from 'react-icons/fa'
import { skillList, projectList } from '../content'


const SkillCards = skillList.map((skill, idx) => <SkillCard key={idx} {...skill}/>)
const ProjectCards = projectList.map((project, idx) => <ProjectCard key={idx} {...project}/>)

const SkillsWrapper = styled.div`
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
    width: 100%;
    margin-bottom: 4rem;
`

const ProjectsWrapper = styled.div`
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    width: 100%;
    margin-bottom: 4rem;
`

export const Home = () => { 
    return (
        <>
            <Hero/>
            <PageWrapper>
                <Section title="Skills" icon={SkillsIcon} description="I primarily have experience with react although I'm more than happy to learn other frameworks."/>
                <SkillsWrapper>
                    {SkillCards}
                </SkillsWrapper>
                <Section title="Projects" icon={ProjectsIcon} description="A collection of personal projects I have worked on."/>
                <ProjectsWrapper>
                    {ProjectCards}
                </ProjectsWrapper>
            </PageWrapper>
        </>
    )
}