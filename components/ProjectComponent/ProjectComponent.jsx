import React,{useState} from 'react'
import styles from './projectcomponent.module.scss'
import Project from './project/project'
import { projects } from '../Projects/data'
import ModalComponent from './modal/modal'



  
  export default function ProjectComponent() {

    const [modal, setModal] = useState({active: false, index: 0})
  
    return (
    <main className={styles.main}>

      <div className={styles.body}>
        <h1>Projects</h1>
        {
          projects.map( (project, index) => {
            return <Project index={index} title={project.name} setModal={setModal} key={index}/>
          })
        }
      </div>
      
      <ModalComponent modal={modal} projects={projects}/>
    </main>
    )
  }