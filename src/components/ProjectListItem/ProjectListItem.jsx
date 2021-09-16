import React from 'react'
import {NavLink} from 'react-router-dom'

function ProjectListItem({id, title, abr, project_lead = "PM"}) {
    return (
        <div className="content-projects-row row" key={id}>
            <div className="content-projects-title">{title}</div>
            <div className="content-projects-info">Web app for Novation Launchpad Software (sound design)</div>
            <div className="content-projects-key">{abr}</div>
            <div className="content-projects-lead">{project_lead}</div>
            <div className="content-projects-spec"> 
                <NavLink className="content-projects-link" to="">View in new page</NavLink>            
            </div>
        </div>
    )
}

export default ProjectListItem
