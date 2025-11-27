import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="mx-4 md:pl-6 md:mt-4">
            <h2 className="text-2xl font-bold text-center md:text-left">{title}</h2>
            <div className="divider mt-0"></div>
        </div>
    );
};

export default SectionTitle;