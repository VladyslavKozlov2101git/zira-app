import React from 'react'
import attachment from '../../components/Images/attachment.png'
import uploadFile from '../../components/Images/addFile.svg'
import avatar1 from '../../components/Images/avatar1.png'
import avatar2 from '../../components/Images/avatar2.png'

function InnerIssue({description, status, priority, issue_type, title, original_estimate, pub_date, key_id, assignee_name, reporter_name}) {
    return (
        <>
            <div className="content-header row between">
                <h2 className="content-issues-title">
                    [{key_id}] {title}
                </h2>
                <p className="content-issues-update">
                    Last update: <span>{pub_date}</span>
                </p>
            </div>

            <div className="content-issues-infoBlock row">
                <div className="issues-infoblock-box columm">
                    <ul className="issues-markers row">
                        <li className="row">
                            <p className="issues-infoblock-txt">
                                Type:
                            </p>
                            <p className={"issues-markers-item  marker-type-"+issue_type}>
                                {issue_type}
                            </p>
                        </li>

                        <li className="row">
                            <p className="issues-infoblock-txt">
                                Priority:
                            </p>
                            <p className={"issues-markers-item  marker-priority-"+priority}>
                                {priority}
                            </p>
                        </li>

                        <li className="row">
                            <p className="issues-infoblock-txt">
                                Status:
                            </p>
                            <p className={"issues-markers-item  marker-status-"+status}>
                                {status === "in_review" ? "in review" : status === "in_progress" ? "in progress" : status}
                            </p>
                        </li>

                    </ul>
                    <div className="issues-infoblock-assignee row">
                        <p className="issues-infoblock-txt">
                            Assignee:
                        </p>
                        <img className="issues-infoblock-avatar" src={avatar1} alt="avatar" />
                        <p className="issues-infoblock-name">
                            {assignee_name} <span>(you)</span>
                        </p>
                        <button className="issues-infoblock-edit" />
                    </div>
                    <div className="issues-infoblock-assignee row">
                        <p className="issues-infoblock-txt">
                            Reporter:
                        </p>
                        <img className="issues-infoblock-avatar" src={avatar2} alt="avatar" />
                        <p className="issues-infoblock-name">
                            {reporter_name} <span></span>
                        </p>
                    </div>

                </div>
                <div className="issues-infoblock-box columm">
                    <div className="issues-infoblock-estimate row">
                        Original estimate: <span>{original_estimate}h</span> <button className="issues-infoblock-edit"></button>
                    </div>
                    <p className="issues-infoblock-reported row">
                        Reported: <span>30m</span> <button className="issues-infoblock-edit"></button>
                    </p>
                </div>

            </div>

            <h3 className="content-innerIssue-title">
                Linked issues +
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
                    <img className="content-attachment-preview" src={attachment} alt="attachment" />
                    <p className="content-attachment-filename">attachment - 1.png</p>
                </li>
                <button className="content-attachment-item content-attachment-btn column">
                    <img className="content-attachment-preview" src={uploadFile} alt="attachment" />
                    <p className="content-attachment-filename">Upload a file</p>
                </button>
            </ul>

            <h3 className="content-innerIssue-title">
                Description
            </h3>

            <p className="content-innerIssue-description">
                {description}
            </p>
        </>
    )
}

export default InnerIssue
