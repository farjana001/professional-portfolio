import React from 'react';
import volunteer from '../../../images/projects/done/volunteer.jpg'
import creative from '../../../images/projects/done/creative agency.jpg'
import travel from '../../../images/projects/done/travel-guru.jpg'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { Link } from 'react-router-dom';

const projectData = [
    {
        id: 1,
        title: "Volunteer Network",
        description: "A full-stack volunteer Service web application",
        img: volunteer,
        tools: [
            {
                item: "React"
            },
            {
                item: "Node.js"
            },
            {
                item: "MongoDB"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        live: "https://volunteers-work.web.app/",
        git: "https://github.com/farjana001/volunteer-network"
    },
    {
        id: 2,
        title: "Creative Agency",
        description: "A complete responsive service selling website",
        img: creative,
        tools: [
            {
                item: "React"
            },
            {
                item: "Node.js"
            },
            {
                item: "MongoDB"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        live: "https://our-creative-agency.web.app/home",
        git: "https://github.com/farjana001/assignment-10"
    },
    {
        id: 3,
        title: "Travel Guru",
        description: "A travel booking web application",
        img: travel,
        tools: [
            {
                item: "React"
            },
            {
                item: "MaterialUI"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        live: "https://travel-gurus.web.app",
        git: "https://github.com/farjana001/travel-guru"
    },
];

const Projects = () => {
    return (
        <div className="container-fluid px-5 pt-1 pb-5">
            <h2 className="text-brand mb-5"><u>Some of My Projects</u></h2>
            <div className="row">
               {
                   projectData.map(pr => <ProjectDetails key={pr.id} projects={pr} />)
               }
            </div>
            <div className="text-center py-4 explore">
            <Link to="/" className="explore-btn">Explore More</Link>
            </div>
        </div>
    );
};

export default Projects;