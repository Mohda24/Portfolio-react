import React from 'react'
// @ts-ignore
import styles from './Main.module.css';
import Card from '../cards/card'
import { projects } from '../../data/projects'
import { filterProjects } from '../../functions/filter'
import { useState } from 'react';

function Main() {
    let [projectsSelected, setProjects] = useState("all");
    let [data, setData] = useState(projects)
    return (
        <main className={styles.main}>
            <section className={styles.filterProjects}>
                <button onClick={() => {
                    setProjects("all")
                    setData(filterProjects("all", projects))

                }} className={`${styles.filterBtn} ${projectsSelected === 'all' && styles.active}`}>All Projects</button>
                <button onClick={() => {

                    setProjects("html")
                    setData(filterProjects("html", projects))

                }} className={`${styles.filterBtn} ${projectsSelected === 'html' && styles.active}`}>HTML & CSS</button>
                <button onClick={() => {
                    setProjects("js")
                    setData(filterProjects("js", projects))

                }} className={`${styles.filterBtn} ${projectsSelected === 'js' && styles.active}`}>JavaScript</button>
                <button onClick={() => {
                    setProjects("react")
                    setData(filterProjects("react", projects))

                }} className={`${styles.filterBtn} ${projectsSelected === 'react' && styles.active}`}>React</button>
                <button onClick={() => {
                    setProjects("php")
                    setData(filterProjects("php", projects))

                }} className={`${styles.filterBtn} ${projectsSelected === 'php' && styles.active}`}>Php & Laravel</button>
            </section>
            <section className={styles.CardsContainer}>
                {data.map((project, index) => {
                    return (
                        <Card key={index} title={project.projectTitle} description={project.description} />
                    )

                })}

            </section>
        </main>
    )
}

export default Main
