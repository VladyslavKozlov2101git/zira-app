import React from 'react'
import '../Projects/projects.scss'
import '../ProjectInner/style.scss'
import '../../index.scss'
import avatar1 from '../../components/Images/avatar1.png'
import avatar2 from '../../components/Images/avatar2.png'
import Header from '../../components/Header/Header'
import './style.scss'

export default function Home() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="page-title">
                    <div className="wrapper">
                        <div className="page-title-row row">
                            <h1 className="page-title-text">
                                Welcome back, <span>Vladyslav</span>
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="wrapper">
                        <div className="content-row row">
                            <div className="content-box avtiveIssues">
                                <div className="content-box-header row">
                                    <h3 className="content-box-title">
                                        Your active issues <span>(03)</span>
                                    </h3>
                                    <a className="content-box-link" href="/">more</a>
                                </div>
                                <ul className="issues-list content-list">
                                    <li className="issues-item row">
                                        <div className="issues-item-logo content-circle" style={{ backgroundColor: '#9463F7' }}>
                                            LP
                                        </div>
                                        <div className="issues-item-txtBox column">
                                            <h5 className="issues-item-title content-item-title">
                                                [LP-12] Добавить временные метки в song splitter
                                            </h5>
                                            <p className="issues-item-deadline content-item-descr">
                                                Deadline: 23.09.2021 (3 days left)
                                            </p>

                                        </div>
                                        <ul className="issues-markers row">
                                            <li className="issues-markers-item  marker-type-task">
                                                Task
                                            </li>
                                            <li className="issues-markers-item  marker-priority-medium">
                                                Medium
                                            </li>
                                            <li className="issues-markers-item  marker-status-todo">
                                                Todo
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="issues-item row">
                                        <div className="issues-item-logo content-circle" style={{ backgroundColor: ' #9463F7' }}>
                                            LP
                                        </div>
                                        <div className="issues-item-txtBox column">
                                            <h5 className="issues-item-title content-item-title">
                                                [LP-17] Исправить расположение функциональных...
                                            </h5>
                                            <p className="issues-item-deadline content-item-descr">
                                                Deadline: 21.09.2021 (1 day left)
                                            </p>

                                        </div>
                                        <ul className="issues-markers row">
                                            <li className="issues-markers-item marker-type-bug">
                                                Bug
                                            </li>
                                            <li className="issues-markers-item marker-priority-low">
                                                Low
                                            </li>
                                            <li className="issues-markers-item  marker-status-inProgress">
                                                In Progress
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="issues-item row">
                                        <div className="issues-item-logo content-circle" style={{ backgroundColor: '#11C26D' }}>
                                            GD
                                        </div>
                                        <div className="issues-item-txtBox column">
                                            <h5 className="issues-item-title content-item-title">
                                                [GD-3] Зарегистрировать API в земельном кабинет...
                                            </h5>
                                            <p className="issues-item-deadline content-item-descr">
                                                Deadline: 29.09.2021 (9 days left)
                                            </p>

                                        </div>
                                        <ul className="issues-markers row">
                                            <li className="issues-markers-item  marker-type-idea">
                                                Idea
                                            </li>
                                        </ul>

                                    </li>
                                </ul>

                            </div>
                            <div className="content-box workActiv">
                                <div className="content-box-header row">
                                    <h3 className="content-box-title">
                                        Workspace activity
                                    </h3>
                                    <a className="content-box-link" href="/">more</a>
                                </div>
                                <ul className="activities-list content-list">
                                    <li className="activities-item row">
                                        <img className="activities-item-avatar content-circle" src={avatar1} alt="avatar" />
                                        <div className="activities-item-txtBox column">
                                            <h5 className="activities-item-title content-item-title">
                                                Vladyslav Kozlov logged 4 hours to task [LP-7]
                                            </h5>
                                            <p className="activities-item-time content-item-descr">
                                                now
                                            </p>
                                        </div>

                                    </li>
                                    <li className="activities-item row">
                                        <img className="activities-item-avatar content-circle" src={avatar2} alt="avatar" />
                                        <div className="activities-item-txtBox column">
                                            <h5 className="activities-item-title content-item-title">
                                                Olexandr Borysiak logged 4 hours to task [LP-7]
                                            </h5>
                                            <p className="activities-item-time content-item-descr">
                                                now
                                            </p>
                                        </div>

                                    </li>
                                    <li className="activities-item row">
                                        <img className="activities-item-avatar content-circle" src={avatar2} alt="avatar" />
                                        <div className="activities-item-txtBox column">
                                            <h5 className="activities-item-title content-item-title">
                                                Olexandr Borysiak logged 4 hours to task [LP-7]
                                            </h5>
                                            <p className="activities-item-time content-item-descr">
                                                now
                                            </p>
                                        </div>

                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
