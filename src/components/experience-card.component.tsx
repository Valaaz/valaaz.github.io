import React from "react";
import { ExperienceType } from "../types/experience.type";

const ExperienceCard = (experience: ExperienceType) => {
    return (
        <div className="card w-[90%] p-4 self-center card-shadow bg-primary md:card-side">
            <p className="justify-center text-center text-2xl md:flex md:items-center md:w-32 md:text-3xl md:shrink-0">{experience.date}</p>
            <div className="divider divider-vertical m-0 mr-2.5 flex-none md:divider-horizontal"></div>
            <div className="card-body p-0 flex-1 lg:ml-2">
                <div>
                    <h2 className="card-title">{experience.title}</h2>
                    <p className="italic">{experience.location}</p>
                </div>
                <div>
                    <p className="underline">{experience.position}</p>
                    <p>{experience.mission}</p>
                    <ul className="list-disc ml-10">
                        {experience.details.map((detail) => (
                            <li>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2 justify-center md:justify-start">
                    {experience.technologies.map((tech) => (
                        <span className="badge badge-outline py-3 chip">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;