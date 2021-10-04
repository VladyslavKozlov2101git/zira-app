import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../../components/Header/Header'
import plus from '../../components/Images/plus.svg'
import settings from '../../components/Images/settings.svg'
import specifications from '../../components/Images/specifications.svg'
import CreateIssue from '../../components/CreateIssue/CreateIssue'
import IssueItem from '../../components/IssueItem/IssueItem';
import InnerIssue from '../../components/InnerIssue/InnerIssue';
import CollaboratorsNav from '../../components/CollaboratorsNav/CollaboratorsNav';


export default function ProjectInner() {
    const [createForm, setCreateForm] = useState(false);
    const [issuesList, setIssuesList] = useState([]);
    const [issuesInner, setIssuesInner] = useState();
    const { id } = useParams()

    useEffect(
        () =>
            axios
                .get('http://api.zira.givenfly.space/projects/' + id + '/issues/', {
                    headers: { Authorization: `Token ${localStorage.token}` },
                })
                .then((res) => {
                    setIssuesList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                }),
                // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const getIssueInfo = async (projectId, issueId) => {
        try {
            const response = await axios.get(`http://api.zira.givenfly.space/projects/${projectId}/${issueId}`, { headers: { "Authorization": `Token ${localStorage.token}` } })

            setIssuesInner(response.data)

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Header />
            <main className="main">
                <section className="page-title">
                    <div className="wrapper">
                        <div className="page-title-row row between">
                            <div className="page_title-block row">
                                <h1 className="page-title-text">
                                    A Launchpad - overview
                                </h1>
                                <CollaboratorsNav />
                            </div>

                            <div className="page-title-buttons row">
                                <button className="page-title-button button-specifications">
                                    <img className="page-title-button-icon" src={specifications} alt="specifications" />
                                    <p>View specifications</p>

                                </button>
                                <button className="page-title-button button-settings">
                                    <img className="page-title-button-icon" src={settings} alt="settings" />
                                    <p>Settings</p>
                                </button>
                                <button className="page-title-button button-add-new" onClick={(e) => setCreateForm(!createForm)}>
                                    <img className="page-title-button-icon" src={plus} alt="plus" />
                                    <p>Add new issue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {createForm && (
                    <CreateIssue closeEvent={() => setCreateForm(false)} />
                )}

                <section className="content">
                    <div className="wrapper">
                        <div className="content-projects row">
                            {issuesList.length > 0 ? <>
                                <div className="content-issues content-allIssues column">
                                    <h2 className="content-issues-title">
                                        All issues
                                    </h2>
                                    <ul className="content-issues-list">
                                        {issuesList.map((issue) => (
                                            <IssueItem
                                                title={issue.title}
                                                keyId={issue.key_id}
                                                key={issue.id}
                                                projectId={id}
                                                issueId={issue.loc_id}
                                                priority={issue.priority}
                                                type={issue.issue_type}
                                                status={issue.status}
                                                onDetail={getIssueInfo}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div className="content-issues content-innerIssue column center">
                                    {issuesInner ?

                                        <InnerIssue
                                            description={issuesInner.description}
                                            status={issuesInner.status}
                                            priority={issuesInner.priority}
                                            issue_type={issuesInner.issue_type}
                                            title={issuesInner.title}
                                            original_estimate={issuesInner.original_estimate}
                                            pub_date={issuesInner.pub_date}
                                            key_id={issuesInner.key_id}
                                            assignee_name={issuesInner.assignee_name}
                                            reporter_name={issuesInner.reporter_name}
                                        /> :

                                        <p className="content-innerIssue-emptyList">Click on the project to see more details</p>

                                    }



                                </div>
                            </> : <div className="content-issues content-empty">There are no issues in the project</div>}


                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
