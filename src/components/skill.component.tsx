import React from "react";

const Skill = ({ name, img }: { name: string, img: string }) => {
    return (
        <div className="flex flex-col items-center gap-1 md:gap-0.5">
            <img src={img} className="w-6 h-6" />
            <p className="text-center text-base/[normal]">{name}</p>
        </div>
    );
};

export default Skill;