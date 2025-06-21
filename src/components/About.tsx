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
          Hi, I’m Rama — a passionate Unity Game Developer with over 8 years of experience creating games for PC, Android, and iOS. I started my journey in 2014 as a game development instructor, which gave me a strong foundation in programming, design, and mentoring. 
          Since 2017, I’ve been working as a full-time game engineer, building polished and immersive gameplay experiences using Unity3D and C#. My work spans a range of genres, from casual mobile titles to more complex PC games, and includes AR/VR experiments since 2018. I handle everything from prototyping and core mechanics to optimization and deployment.
        </p>
        <p className={aboutStyle}>
          In 2025, I expanded my skill set into web front-end development, working with HTML, CSS, Bootstrap, React, and TailwindCSS. This has enabled me to create companion tools, landing pages, and interactive web experiences that complement my game projects. 
          Currently, I’m freelancing full-time, helping clients bring their ideas to life through games and interactive applications. I’m always looking to collaborate with passionate teams and push the boundaries of both game and web development.
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