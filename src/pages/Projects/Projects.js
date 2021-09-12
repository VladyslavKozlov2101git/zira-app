import React from 'react'

import './projects.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'
import Header from '../../components/Header/Header'


export default function Projects() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="page-title">
                    <div className="wrapper">
                        <div className="page-title-row row">
                            <h1 className="page-title-text">
                                Projects
                            </h1>
                            <button className="create-project-btn">Create new project</button>
                        </div>

                    </div>
                </section>
                <section className="content">
                    <div className="wrapper">
                        <div className="content-projects column">
                            <div className="content-projects-row row">
                                <div className="content-projects-title bold">Title</div>
                                <div className="content-projects-key bold">Key</div>
                                <div className="content-projects-lead bold">Project Lead</div>
                            </div>
                            <div className="content-projects-row row">
                                <div className="content-projects-title">A Launchpad</div>
                                <div className="content-projects-key">LP</div>
                                <div className="content-projects-lead">Oleksii Moshura</div>
                            </div>
                            <div className="content-projects-row row">
                                <div className="content-projects-title">Garden Suite</div>
                                <div className="content-projects-key">GD</div>
                                <div className="content-projects-lead">Vladyslav Kozlov</div>
                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </>
    )
}
