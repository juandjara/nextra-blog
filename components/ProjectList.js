import projects from '../projects.json'
import Image from 'next/image'
import classes from './projects.module.css'

export default function ProjectList() {
  return projects.map((project, index) => (
    <div key={project.link}
      className={classes.li} 
      style={{
        animationDelay: `${index / projects.length}s`
      }}>
      <div className={classes.img}>
        <Image width={80} height={80} src={project.image} alt="" />
      </div>
      <div className={classes.text}>
        <a className={classes.a} style={{ textDecoration: 'none' }} href={project.link}>{project.title}</a>
        <p style={{ margin: 0 }}>{project.description}</p>
      </div>
    </div>
  ))
}