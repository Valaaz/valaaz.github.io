import * as React from "react";
import ExperienceCard from "../components/experience-card.component";
import Footer from "../components/layouts/footer.layout";
import Header from "../components/layouts/header.layout";
import SectionTitle from "../components/section-title.component";
import SkillCard from "../components/skill-card.component";
import experiencesData from "../data/experiences.data.json";
import formationsData from "../data/formations.data.json";
import skillsData from "../data/skills.data.json";
import { ExperienceType } from "../types/experience.type";
import { FormationType } from "../types/formation.type";

const IndexPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="hero">
          <Presentation />
        </div>
        <PresentationText />
        <FormationsSection />
        <ExperiencesSection />
        <SkillsSection />
        <Footer />
      </div>
    </div>
  );
};

const Presentation = () => {
  return (
    <div className="hero-content flex-col md:flex-row-reverse gap-20">
      <div className="hover-3d">
        <img
          src="/portrait.jpg"
          className="max-w-80 rounded-lg shadow-2xl"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h1 className="text-5xl text-center font-bold">Développeur Frontend</h1>
        <div className="divider"></div>
        <span className="text-rotate text-2xl justify-items-center w-full duration-6000 pointer-events-none">
          <span>
            <span>🌐 Web</span>
            <span>📱 Mobile</span>
            <span>💻 Logiciel</span>
          </span>
        </span>
      </div>
    </div>
  );
};

const PresentationText = () => {
  return (
    <div className="card bg-primary w-[90%] self-center">
      <div className="card-body">
        <p><span>“</span>Diplômé d'un Master Informatique avec une spécialisation IHM, j'aime développer des interfaces et gérer les interactions avec les utilisateurs.
          Les domaines dans lequels je m'épanouis sont le développement mobile, le développement web et le développement logiciel.<span>”</span></p>
      </div>
    </div>
  );
};

const FormationsSection = () => {
  const formations: FormationType[] = formationsData;
  return (
    <div className="flex flex-col">
      <SectionTitle title="Formations" />

      <ul className="timeline timeline-vertical w-fit">
        {
          formations.map((formation, index) => (
            <li className="first:h-auto last:h-auto h-[100px]">
              {index !== 0 && <hr className="bg-primary" />}
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
              {formations.length - 1 !== index && <hr className="bg-primary" />}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const ExperiencesSection = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle title="Expériences Professionnelles" />

      <div className="flex flex-col gap-6">
        {experiencesData.map((experience: ExperienceType) => (
          <ExperienceCard {...experience} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle title="Compétences" />

      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill: { sectionName: string; skills: [] }) => (
          <SkillCard {...skill} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;