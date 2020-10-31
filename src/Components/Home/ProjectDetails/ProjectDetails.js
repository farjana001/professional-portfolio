import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
    const { title, description, img, tools, live, git } = projects;
    // const technology = tools.item;
    console.log(tools);
    return (

        <div className="col-md-4 mb-5">
            <div className="project-body mt-3">
                <div className="project-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="project-details">
                    <h4 className="font-weight-bold">{title}</h4>
                    <p className="project-description">{description}</p>
                    <ul className="list-inline-mb-0 tech-tools align-left">
                        {
                            tools.map(tl => <li className="list-inline-item tools">{tl.item}</li>)
                        }
                    </ul>
                    <div className="links ml-1 pb-3">
                        <a target="_blank" href={live} className="live-link">Website</a>
                        <a target="_blank" href={git} className="git-link">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;