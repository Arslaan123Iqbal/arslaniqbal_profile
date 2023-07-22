import React from 'react'
import Projects from './Projects'
import { projects } from './data'
import styles from './projects.module.scss'

const ProjectSection = () => {
  return (
   <div className={styles.mainProject}>
     <Projects projects={[projects[0], projects[1]]}/>
    <Projects projects={[projects[2], projects[3]]} reversed={true}/>
    <Projects projects={[projects[4], projects[5]]}/>
    <Projects projects={[projects[6], projects[7]]} reversed={true}/>
   </div>
  )
}

export default ProjectSection