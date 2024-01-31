import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From volunteering to paid jobs. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'work' ?
            <ToggleButton active value="work" onClick={() => setToggle('work')}>Work</ToggleButton>
            :
            <ToggleButton value="work" onClick={() => setToggle('work')}>Work</ToggleButton>
          }
            <Divider />
          {toggle === 'school pj' ?
            <ToggleButton active value="school pj" onClick={() => setToggle('school pj')}>School Projects</ToggleButton>
            :
            <ToggleButton value="school pj" onClick={() => setToggle('school pj')}>School Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'volunteer' ?
            <ToggleButton active value="volunteer" onClick={() => setToggle('volunteer')}>Volunteering</ToggleButton>
            :
            <ToggleButton value="volunteer" onClick={() => setToggle('volunteer')}>Volunteering</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects