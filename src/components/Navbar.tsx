import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Example for icons, install if needed
import { PageType } from './PageType';


interface NavbarProp{
  onSettingPage: (pageName:PageType) => void;
}

const Navbar: React.FC<NavbarProp> = ({onSettingPage}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when screen size changes (optional, but good for responsiveness)
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) { // Adjust breakpoint as needed (md: breakpoint in Tailwind)
            setIsMenuOpen(false);
        }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
     <nav className="fixed top-0 left-0 w-[calc(100%-6px)] z-50 bg-stone-900 p-4 text-orange-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="/" className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-2xl font-bold">
          Rama's Gallery
        </a>

        {/* Mobile menu button (hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-orange-300 font-bold" onClick={()=> onSettingPage(PageType.Home)}>Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300 font-bold" onClick={()=>onSettingPage(PageType.About)}>About</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300 font-bold" onClick={() => onSettingPage(PageType.Skill)}>Skills</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300 font-bold" onClick={()=> onSettingPage(PageType.GameProject)}>Game Project</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-300 font-bold" onClick={()=> onSettingPage(PageType.WebProject)}>Web Project</a>
          </li>
          <li>
            <a href="https://miqra1612.github.io/PiratesTreasureStory/2D%20Adventure%20WebGL/index.html" className="hover:text-orange-300 font-bold">Play Mini Game</a>
          </li>
          <li>
            <a href="#" className="bg-gradient-to-r from-orange-700 to-orange-400 text-white hover:text-lime-200 font-bold rounded-md p-2" onClick={()=> onSettingPage(PageType.Contact)}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Collapsible mobile menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-[calc(100%-6px)] bg-stone-900 p-4 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 1000 }} // Ensure it's above other content
      >
        <ul className="flex flex-col p-4 space-y-1 mt-1"> {/* Adjust mt-16 based on your header height */}
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 rounded" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.Home)}}>Home</a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 rounded" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.About)}}>About</a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 rounded" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.Skill)}}>Skills</a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 rounded" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.GameProject)}}>Game Project</a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 rounded" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.WebProject)}}>Web Project</a>
          </li>
          <li>
            <a href="https://miqra1612.github.io/PiratesTreasureStory/2D%20Adventure%20WebGL/index.html" className="block p-2 hover:text-orange-300 rounded" onClick={() => setIsMenuOpen(false)}>Play Mini Game</a>
          </li>
          <li>
            <a href="#" className="block p-2 text-orange-300 hover:text-orange-600" onClick={() => {setIsMenuOpen(false); onSettingPage(PageType.Contact)}}>Contact</a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:text-orange-300 hover:text-blue-200 rounded" onClick={() => setIsMenuOpen(false)}>Close</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;