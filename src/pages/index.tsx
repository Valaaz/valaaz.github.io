import * as React from "react";
import formationsData from "../data/formations.data.json";
import portrait from "../images/portrait.jpg";
import { Formation } from "../types/formation.type";

const IndexPage = () => {
  return (
    <div className="h-screen flex flex-col" data-theme="retro">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="hero">
          <Presentation />
        </div>
        <PresentationText />
        <FormationsSection />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="navbar bg-secondary">
      <div className="navbar-start">
      </div>
      <h1 className="navbar-center text-xl font-bold">Portfolio</h1>
      <div className="navbar-end" />
    </header>
  );
}

const Presentation = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse gap-20">
      <img
        src={portrait}
        className="max-w-80 rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Developer Frontend</h1>
        <div className="divider"></div>
        <p className="py-3 text-2xl text-center">
          Web - Mobile - Logiciel
        </p>
      </div>
    </div>
  );
};

const PresentationText = () => {
  return (
    <div className="card bg-secondary w-[90%] self-center">
      <div className="card-body">
        <p>Diplômé d'un Master Informatique avec une spécialisation IHM, j'aime développer des interfaces et gérer les interactions avec les utilisateurs. Les domaines dans lequels je m'épanouis sont le développement mobile, le développement web et le développement logiciel.</p>
      </div>
    </div>
  );
};

const FormationsSection = () => {
  const formations: Formation[] = formationsData;
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">Formations</h2>
      <div className="divider mt-0"></div>

      <ul className="timeline timeline-vertical w-fit">
        {
          formations.map((formation, index) => (
            <li className="first:h-auto last:h-auto h-[100px]">
              {index !== 0 && <hr />}
              <div className="timeline-start">{formation.years}</div>
              <div className="timeline-middle">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" stroke="black" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="12" fill="#7f1d1d" />
                </svg>
              </div>
              <div className="timeline-end">
                <div className="font-bold">{formation.degree}</div>
                <div>{formation.location}</div>
              </div>
              {formations.length - 1 !== index && <hr />}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default IndexPage;