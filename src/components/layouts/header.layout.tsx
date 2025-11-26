import { Link } from "gatsby";
import React, { useState } from "react";
import personalInformations from "../../data/personal-informations.data.json";
import { PersonalInformationType } from "../../types/personal-information.type";

export default function Header() {
    const [phoneNumberCopied, setPhoneNumberCopied] = useState(false);
    const infos: PersonalInformationType = personalInformations;
    console.log(infos);

    const copyToClipboard = () => {
        const phone = infos.phone;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(phone)
                .then(() => {
                    setPhoneNumberCopied(true);
                    setTimeout(() => setPhoneNumberCopied(false), 2000);
                })
                .catch(() => {
                    fallbackCopy(phone);
                });
        } else {
            fallbackCopy(phone);
        }
    };

    const fallbackCopy = (text: string) => {
        const input = document.createElement("input");
        input.value = text;
        document.body.appendChild(input);
        input.select();

        // Wait for Safari to give an alternative
        document.execCommand("copy");
        document.body.removeChild(input);

        setPhoneNumberCopied(true);
        setTimeout(() => setPhoneNumberCopied(false), 2000);
    };

    return (
        <header className="navbar bg-primary mb-6 card-shadow">

            {/* Hamburger & Title */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content bg-base-100 rounded-box w-max z-1 mt-3 p-2 shadow-sm">
                        <li><Link to="/" className="tab text-base w-full justify-start">Présentation</Link></li>
                        <li><Link to="/projects" className="tab text-base w-full justify-start">Projets</Link></li>
                        <div className="divider mx-2 my-0 gap-0"></div>
                        <li>
                            <a href="/cv.pdf" target="_blank" className="text-base flex justify-between w-full">
                                CV
                                <img src="/icons/open-line.svg" alt="Ouvrir lien" width="18px" />
                            </a>
                        </li>
                    </ul>
                </div>
                <h1 className="text-xl font-bold">Portfolio</h1>
            </div>

            {/* Tab */}
            <div className="navbar-center hidden md:flex">
                <div role="tablist" className="tabs tabs-border">
                    <Link to="/" className="tab">Présentation</Link>
                    <Link to="/projects" className="tab">Projets</Link>
                    <a href="/cv.pdf" target="_blank" className="tab flex gap-0.5">
                        CV
                        <img src="/icons/open-line.svg" alt="Ouvrir lien" width="16px" />
                    </a>
                </div>
            </div>

            {/* Contact */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-field bg-primary hover:brightness-75">Contacter
                        <svg className="mt-px size-2 opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-max p-2 shadow-sm">
                        <li>
                            <a href={"mailto:" + infos.mail} target="_blank" rel="noopener noreferrer" className="text-base flex justify-between">
                                {infos.mail}
                                <img src="/icons/open-line.svg" alt="Ouvrir lien" width="18px" />
                            </a>
                        </li>
                        <li>
                            <a href={infos.linkedin} target="_blank" rel="noopener noreferrer" className="text-base flex justify-between">
                                LinkedIn
                                <img src="/icons/open-line.svg" alt="Ouvrir lien" width="18px" />
                            </a>
                        </li>
                        <div className="divider mx-3 my-0 gap-0"></div>
                        <li className="tooltip" data-tip={phoneNumberCopied ? 'Copié !' : 'Copier'}
                            onClick={() => {
                                copyToClipboard();
                            }}
                        >
                            <div className="flex justify-between">
                                <p className="text-base">{infos.phone.replace('+33', '+33 ').replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1 ').trim()}</p>
                                <img src="/icons/copy.svg" alt="Copier numéro de téléphone" width="18px" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}