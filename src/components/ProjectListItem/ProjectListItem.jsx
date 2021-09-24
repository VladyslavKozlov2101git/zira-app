import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectListItem({ id, short, title, abr, project_lead = 'PM', project_lead_id }) {
  return (
    <div className="content-projects-row row" key={id}>
      <div className="content-projects-title">{title}</div>
      <div className="content-projects-info">{short}</div>
      <div className="content-projects-key">{abr}</div>
      <div className="content-projects-lead">
        <NavLink className="content-projects-userLink" to={"http://localhost:3000/users/" + project_lead_id}>
          {project_lead}
        </NavLink>
      </div>
      <div className="content-projects-spec">
        <NavLink className="content-projects-link" to="">
          View in new page
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectListItem;
