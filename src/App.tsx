import React, { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AppHead from './components/AppHead'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'
import { PageType } from './components/PageType'
import Contact from './components/Contact'

function App() {

  interface SelectedPage{
    currentPage : PageType;
  }

  const [selectedPage, setSelectedPage] = useState(PageType.Home);

  const onSetPage = (pageName:PageType) =>{
    setSelectedPage( pageName);
  }
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const gameProjectRef = useRef<HTMLDivElement>(null);

  const setfRef = (ref:React.RefObject<HTMLDivElement|null>)=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:"smooth", block:"start"});
    }
  }

  useEffect(()=>{
    switch (selectedPage) {
      case PageType.Home:
      setfRef(homeRef);
      break;
      case PageType.About:
      setfRef(aboutRef);
      break;
      case PageType.Skill:
      setfRef(skillRef);
      break;
      case PageType.GameProject:
      setfRef(gameProjectRef);
      break;
    
      default:
        break;
    }
  },[selectedPage]);

  const ChangingPage = ()=>{
    
     switch (selectedPage) {
          case PageType.Home:
               return(
              <>
                
                <div ref={homeRef}>
                <AppHead onSettingPage = {onSetPage}/>
                </div>
                <About/>
                <Skill/>
              </>
            );
            break;
            case PageType.About:
               return(
              <>
                
                <AppHead onSettingPage = {onSetPage}/>
                <div ref={aboutRef}>
                <About/>
                </div>
                <Skill/>
              </>
            );
            break;
            case PageType.Skill:
               return(
              <>
               
                <AppHead onSettingPage = {onSetPage}/>
                <About/>
                <div ref={skillRef}>
                <Skill/>
                </div>
              </>
            );
            break;
          case PageType.GameProject:
             return(
              <>
              <div ref={gameProjectRef}>
                <Project/>
              </div>
                
              </>
            );
            break;
          case PageType.Contact:
             return(
              <>
                <Contact/>
              </>
            );
            break;
           
        
          default:
            return(
              <>
                <AppHead onSettingPage = {onSetPage}/>
                <About/>
                <Skill/>
              </>
            );
            break;
      }

     
  }
  

  return (
    <>
    <div className="bg-stone-900 left-0 w-screen h-screen overflow-x-hidden">
      <Navbar onSettingPage = {onSetPage}/>
        {ChangingPage()}
      
      <Footer/>
    </div>
     
    </>
  )
}

export default App
