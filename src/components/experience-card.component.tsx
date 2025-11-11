import React from "react";
import { ExperienceType } from "../types/experience.type";

const ExperienceCard = (experience: ExperienceType) => {
    return (
        <div className="card card-side w-[90%] self-center shadow-sm bg-secondary">
            <p className="flex justify-center items-center ml-4 w-32 text-3xl text-center flex-shrink-0">{experience.date}</p>
            <div className="divider divider-horizontal py-3 flex-none"></div>
            <div className="card-body pl-0 pt-2 pb-2 flex-1">
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
                <p className="font-bold">{experience.technologies.join(' - ')}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;