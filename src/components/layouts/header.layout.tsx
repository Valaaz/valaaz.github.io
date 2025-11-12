import { Link } from "gatsby";
import React from "react";

export default function Header() {
    return (
        <header className="flex flex-col items-center bg-primary mb-6">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <div role="tablist" className="tabs tabs-border">
                <Link to="/" className="tab">Présentation</Link>
                <Link to="/projects" className="tab">Projets</Link>
            </div>
        </header>
    );
}