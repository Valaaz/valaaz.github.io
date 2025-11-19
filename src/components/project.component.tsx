import React from "react";
import { ProjectType } from "../types/project.type";

const Project = (projectData: ProjectType) => {
    return (
        <div className="card bg-primary card-shadow h-full">
            <div className="card-body py-6">
                <h2 className="card-title flex flex-wrap items-baseline gap-1">
                    <span>{projectData.title}</span>
                    <span>-</span>
                    <span className="inline-flex items-baseline gap-0.5">
                        {projectData.team}
                        <img src="/icons/person.svg" alt="Person icon" width="14" />
                    </span>
                </h2>
                <p>{projectData.description}</p>
                <div className="flex flex-wrap gap-2 w-[90%]">
                    {projectData.technologies.map((tech) => (
                        <span className="badge badge-outline py-3 chip">{tech}</span>
                    ))}
                </div>
                <a className="w-6 absolute right-4 bottom-4" href={projectData.link} target="_blank" rel="noopener noreferrer"><img src="/logos/github.svg"></img></a>
            </div>
        </div>
    );
};

export default Project;