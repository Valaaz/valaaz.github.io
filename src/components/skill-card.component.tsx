import React from "react";
import { SkillType } from "../types/skill.type";
import Skill from "./skill.component";

const SkillCard = (skillsData: SkillType) => {
    return (
        <div className="flex flex-col gap-6">
            <fieldset className="fieldset w-[90%] bg-primary border-base-300 rounded-box self-center p-4 card-shadow">
                <legend className="fieldset-legend font-bold text-xl bg-[#a24936] rounded-box p-2">{skillsData.sectionName}</legend>
                <div className="flex gap-4 justify-center md:justify-start">
                    {skillsData.skills.map((skill) => (
                        <Skill {...skill} />
                    ))}
                </div>
            </fieldset>
        </div>
    );
};

export default SkillCard;