import { memo } from 'react'

const About = memo(() => {
  const aboutStyle = "bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-xl max-sm:text-sm font-bold mx-20 mt-5";
  
  let cardStyle = "bg-orange-900 border-orange-900 hover:bg-orange-700 justify-center hover:border-lime-200 hover:text-lime-200 w-40 max-sm:w-30 h-35 max-sm:h-25 border-2 font-bold text-6xl max-sm:text-xl text-white p-1 rounded-2xl";
  
  const innerText = "text-xl max-sm:text-sm font-medium p-1 ";
  return (
    <>
    <div className="flex flex-col items-center justify-center left-0 w-screen bg-stone-900">
        <h3 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold mt-18 p-1">About Me</h3>
        <p className={aboutStyle}> 
          Hi, I’m Rama — a passionate Unity Game Developer with over 8+ years of experience creating games for PC, Android, and iOS.
          My journey began in 2014 as a game development instructor, where I built a strong foundation in programming, design, and mentoring others. By 2017, I transitioned into a full-time game engineer, focusing on creating immersive and polished gameplay experiences using Unity3D and C#.
          
        </p>
        <p className={aboutStyle}>
          Over the years, I’ve worked on a variety of game genres, including casual mobile games, PC experiences, and even experimented with AR/VR (since 2018). My projects often involve end-to-end development, from prototyping and game mechanics to optimization and deployment.
          Currently, I’m working as a freelance game developer, building high-quality games and helping clients bring their ideas to life. My goal is to collaborate with passionate teams and continue growing as a game engineer.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-center mt-10">
          <div className={cardStyle}> 8+
            <h6 className={innerText}>Years Experience</h6>
          </div>

          <div className={cardStyle}> 30+
            <h6 className={innerText}>Completed Projects</h6>
          </div>

          <div className={cardStyle}> 20+
            <h6 className={innerText}>Happy Client</h6>
          </div>

          <div className={cardStyle}> 40
            <h6 className={innerText}>Hours / Week Availability</h6>
          </div>
        </div>
    </div>
    </>
  )
})

export default About