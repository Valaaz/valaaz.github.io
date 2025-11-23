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
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 items-start shadow">
                        <li><Link to="/" className="tab text-base">Présentation</Link></li>
                        <li><Link to="/projects" className="tab text-base">Projets</Link></li>
                    </ul>
                </div>
                <h1 className="text-xl font-bold">Portfolio</h1>
            </div>
            <div className="navbar-center hidden md:flex">
                <div role="tablist" className="tabs tabs-border">
                    <Link to="/" className="tab">Présentation</Link>
                    <Link to="/projects" className="tab">Projets</Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">Contacter</div>
                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content bg-secondary rounded-box z-1 mt-4 w-max p-2 shadow-sm">
                        <li>
                            <div className="flex justify-between">
                                <a href={"mailto:" + infos.mail} target="_blank" rel="noopener noreferrer" className="text-base">{infos.mail}</a>
                                <img src="/icons/open-line.svg" alt="Ouvrir lien" width="18px" />
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <a href={infos.linkedin} target="_blank" rel="noopener noreferrer" className="text-base">LinkedIn</a>
                                <img src="/icons/open-line.svg" alt="Ouvrir lien" width="18px" />
                            </div>
                        </li>
                        <div className="divider mx-3 my-0 gap-0"></div>
                        <li className="tooltip" data-tip={phoneNumberCopied ? 'Copié !' : 'Copier'}
                            onClick={() => {
                                copyToClipboard();
                            }}
                        >
                            <div className="flex justify-between">
                                <p className="text-base">{infos.phone.replace('+33', '+33 ').replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1 ').trim()}</p>
                                <img src="/icons/copy.svg" alt="Ouvrir lien" width="18px" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}