import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="pl-6 mt-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="divider mt-0"></div>
        </div>
    );
};

export default SectionTitle;