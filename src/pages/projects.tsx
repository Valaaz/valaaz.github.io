import React from "react";
import Footer from "../components/layouts/footer.layout";
import Header from "../components/layouts/header.layout";
import Project from "../components/project.component";
import projectsDut from "../data/projects/dut-projects.data.json";
import projectsLicence from "../data/projects/licence-projects.data.json";
import projectsPersonal from "../data/projects/personal-projects.data.json";
import { ProjectType } from "../types/project.type";

const ProjectsPage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-col gap-4">
                <ProjectsSection title="Projets personnels" projects={projectsPersonal} />
                <ProjectsSection title="Licence" projects={projectsLicence} />
                <ProjectsSection title="DUT" projects={projectsDut} />
            </div>
            <Footer />
        </div>
    );
};

const ProjectsSection = ({ title, projects }: { title: string, projects: [] }) => {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <h1 className="text-center text-2xl font-bold uppercase w-full">{title}</h1>
                <div className="divider my-0 mx-[30%]"></div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-3 px-2">
                {projects.map((project: ProjectType) => (
                    <Project {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;