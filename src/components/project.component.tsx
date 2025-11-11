import React from "react";
import { ProjectType } from "../types/project.type";

const Project = (projectData: ProjectType) => {
    return (
        <div className="card bg-primary card-shadow h-full">
            <div className="card-body py-6">
                <h2 className="card-title">
                    {projectData.title} -
                    <span className="flex items-baseline gap-0.5">
                        {projectData.team}<img src="/icons/person.svg" alt="Person icon" width="14"></img>
                    </span>
                </h2>
                <p>{projectData.description}</p>
                <div className="flex gap-2">
                    {projectData.technologies.map((tech) => (
                        <span className="badge badge-outline py-3 chip">{tech}</span>
                    ))}
                </div>
                <a className="w-6 absolute right-4 bottom-4" href={projectData.link} target="blank"><img src="/logos/github.svg"></img></a>
            </div>
        </div>
    );
};

export default Project;