import { Menu } from "lucide-react";
import * as React from "react";

const IndexPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col" data-theme="retro">
      <header className="navbar bg-primary">
        <div className="navbar-start">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        <h1 className="navbar-center">Mon Portfolio</h1>
        <div className="navbar-end" />
      </header>
      <div className="flex flex-1">
        <ul className={`menu bg-base-200 rounded-box w-56 ${isOpen ? 'block' : 'hidden'}`}>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
        <div className="flex-1 p-4">
          <p>Bienvenue sur mon portfolio !</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;