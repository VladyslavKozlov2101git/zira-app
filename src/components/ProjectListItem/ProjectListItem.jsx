import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectListItem({ id, numID, short, title, abr, project_lead, project_lead_id }) {

  return (
    <div className="content-projects-row row" key={id}>
      <div className="content-projects-title">
        <NavLink className="content-projects-userLink" to={"/projects/" + numID}>
          {title}
        </NavLink>
      </div>
      <div className="content-projects-info">{short}</div>
      <div className="content-projects-key">
        <NavLink className="content-projects-userLink" to={"/projects/" + numID}>
          {abr}
        </NavLink>
      </div>
      <div className="content-projects-lead">
        <NavLink className="content-projects-userLink" to={"/users/" + project_lead_id}>
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
