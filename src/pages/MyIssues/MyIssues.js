import React from 'react'
import attachment from '../../components/Images/attachment.png'
import uploadFile from '../../components/Images/addFile.svg'
import avatar1 from '../../components/Images/avatar1.png'
import avatar2 from '../../components/Images/avatar2.png'

export default function MyIssues() {
    return (
        <main className="main">
        <section className="page-title">
            <div className="wrapper">
                <div className="page-title-row row">
                    <h1 className="page-title-text">
                        A Launchpad - overview 
                    </h1>
                </div>                    
            </div>
        </section>
        <section className="content">
            <div className="wrapper">
                <div className="content-projects row">
                <div className="content-issues content-allIssues column">
                    <h2 className="content-issues-title">
                        All issues
                    </h2>
                    <ul className="content-issues-list">
                        <li className="content-issues-item">
                            <div className="content-issues-header row">
                                <p className="content-issues-key">
                                    [LP-12]
                                </p>
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

                            </div>
                            <p className="content-issues-txt">
                                Добавить временные метки в song splitter
                            </p>
                        </li>
                        <li className="content-issues-item">
                            <div className="content-issues-header row">
                                <p className="content-issues-key">
                                    [LP-12]
                                </p>
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

                            </div>
                            <p className="content-issues-txt">
                                Добавить временные метки в song splitter
                            </p>
                        </li>
                        <li className="content-issues-item">
                            <div className="content-issues-header row">
                                <p className="content-issues-key">
                                    [LP-12]
                                </p>
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

                            </div>
                            <p className="content-issues-txt">
                                Добавить временные метки в song splitter
                            </p>
                        </li>
                        <li className="content-issues-item">
                            <div className="content-issues-header row">
                                <p className="content-issues-key">
                                    [LP-12]
                                </p>
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

                            </div>
                            <p className="content-issues-txt">
                                Добавить временные метки в song splitter
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="content-issues content-innerIssue column">
                    <div className="content-header row">
                        <h2 className="content-issues-title">
                            [LP-12] Добавить временные метки в song splitter
                        </h2>
                        <p className="content-issues-update">
                            Last update: <span>18.09.2021 14:32</span> 
                        </p>
                    </div>

                    <div className="content-issues-infoBlock row">
                        <div className="issues-infoblock-box columm">
                            <ul className="issues-markers row">
                                <li className="row">
                                    <p className="issues-infoblock-txt">
                                        Type:
                                    </p>
                                    <p className="issues-markers-item  marker-type-task">
                                        Task
                                    </p>
                                </li>
                                
                                <li  className="row">
                                    <p className="issues-infoblock-txt">
                                        Status:
                                    </p>
                                    <p className="issues-markers-item  marker-priority-medium">
                                        Medium
                                    </p>
                                </li>
                                
                                <li  className="row">
                                    <p className="issues-infoblock-txt">
                                        Status:
                                    </p>
                                    <p className="issues-markers-item  marker-status-todo">
                                        Todo
                                    </p>
                                </li>
                                
                            </ul>
                            <div className="issues-infoblock-assignee row">
                                <p className="issues-infoblock-txt">
                                    Assignee:
                                </p>
                                <img className="issues-infoblock-avatar" src={avatar1} alt="avatar"/>
                                <p className="issues-infoblock-name">
                                    Vladyslav Kozlov <span>(you)</span>
                                </p>
                                <button className="issues-infoblock-edit"/>
                            </div>
                            <div className="issues-infoblock-assignee row">
                                <p className="issues-infoblock-txt">
                                    Reporter:
                                </p>
                                <img className="issues-infoblock-avatar" src={avatar2} alt="avatar"/>
                                <p className="issues-infoblock-name">
                                    Oleksii Moshura <span></span>
                                </p>
                            </div>

                        </div>
                        <div className="issues-infoblock-box columm">
                            <div className="issues-infoblock-estimate row">
                                Original estimate: <span>2h</span> <button className="issues-infoblock-edit"></button>
                            </div>
                            <p className="issues-infoblock-reported row">
                                Reported: <span>30m</span> <button className="issues-infoblock-edit"></button>
                            </p>
                        </div>

                    </div>

                    <h3 className="content-innerIssue-title">
                        Linked issues
                    </h3>

                    <ul className="content-linked-list colum">
                        <li className="content-linked-item row">
                            <a className="content-linked-item-link" href="/">
                                <span>[LP-12]</span> Добавить временные метки в song splitter
                            </a>
                            
                        </li>
                        <li className="content-linked-item row">
                            <a className="content-linked-item-link" href="/">
                                <span>[LP-12]</span> Добавить временные метки в song splitter
                            </a>
                            
                        </li><li className="content-linked-item row">
                            <a className="content-linked-item-link" href="/">
                                <span>[LP-12]</span> Добавить временные метки в song splitter
                            </a>
                            
                        </li><li className="content-linked-item row">
                            <a className="content-linked-item-link" href="/">
                                <span>[LP-12]</span> Добавить временные метки в song splitter
                            </a>
                            
                        </li>
                    </ul>

                    <h3 className="content-innerIssue-title">
                        Attachments
                    </h3>

                    <ul className="content-attachment-list row">
                        <li className="content-attachment-item column">
                            <img className="content-attachment-preview" src={attachment} alt="attachment"/>
                            <p className="content-attachment-filename">attachment - 1.png</p>
                        </li>
                        <button className="content-attachment-item content-attachment-btn column">
                            <img className="content-attachment-preview" src={uploadFile} alt="attachment"/>
                            <p className="content-attachment-filename">Upload a file</p>
                        </button>
                    </ul>

                    <h3 className="content-innerIssue-title">
                        Description
                    </h3>

                    <p className="content-innerIssue-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                </div>
                </div>
            </div>
        </section>

    </main>
    )
}
