import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';
import './projects.scss';
import '../MyIssues/myissues.scss';
import '../../index.scss';
import Header from '../../components/Header/Header';
import CreateProject from '../../components/CreateProject/CreateProject';

export default function Projects() {
  const [createForm, setCreateForm] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(
    () =>
      axios
        .get('http://api.zira.givenfly.space/api/projects/', {
          headers: { Authorization: `Token ${localStorage.token}` },
        })
        .then((res) => {
          setProjects(res.data);
        })
        .catch((err) => {
          console.log(err);
        }),
    [],
  );

  return (
    <>
      <Header />

      <main className="main">
        <section className="page-title">
          <div className="wrapper">
            <div className="page-title-row row">
              <h1 className="page-title-text">Projects</h1>
              <button className="create-project-btn" onClick={(e) => setCreateForm(!createForm)}>
                Create new project
              </button>
            </div>
          </div>
        </section>

        {createForm && (
          <CreateProject setProjects={setProjects} closeEvent={() => setCreateForm(false)} />
        )}

        <section className="content">
          <div className="wrapper">
            <div className="content-projects column">
              {projects.length > 0 ? (
                <>
                  <div className="content-projects-row row">
                    <div className="content-projects-title bold">Title</div>
                    <div className="content-projects-info bold">Short info</div>
                    <div className="content-projects-key bold">Key</div>
                    <div className="content-projects-lead bold">Project Lead</div>
                    <div className="content-projects-spec bold">Specifications</div>
                  </div>

                  {projects.map((project) => (
                    <ProjectListItem
                      key={project.id}
                      abr={project.key}
                      title={project.title}
                      project_lead={project.project_lead}
                      short={project.short_info}
                    />
                  ))}
                </>
              ) : (
                <p className="content-projects-empty-list">
                  There are no projects. Click on Create Project
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
