import React from 'react'
import './style.scss'

function IssueItem({id, title, keyId, priority, type, status, onDetail, projectId, issueId}) {
    return (
        <li className="content-issues-item" key={id} onClick={()=>onDetail(projectId, issueId)}>
            <div className="content-issues-header row">
                <p className="content-issues-key">
                    [{keyId}]
                </p>
                <ul className="issues-markers row">
                    <li className={"issues-markers-item  marker-type-" + type}>
                        {type}
                    </li>
                    <li className={"issues-markers-item  marker-priority-" + priority}>
                        {priority}
                    </li>
                    <li className={"issues-markers-item marker-status-" + status}>
                        {status === "in_review" ? "in review" : status === "in_progress" ? "in progress" : status}
                    </li>
                </ul>

            </div>
            <p className="content-issues-txt">
                {title}
            </p>
        </li>
    )
}

export default IssueItem
