import React, { memo } from 'react'

const About = memo(() => {
  return (
    <>
    <div className="flex flex-col items-center justify-center left-0 w-screen h-screen bg-stone-900 ">
        <h3 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold mt-5 p-1">About Me</h3>
        <p className="bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-xl max-sm:text-sm font-bold mx-20 mt-5"> 
          I'm a Unity3D developer with over 8 years of experience creating games, augmented reality (AR), and virtual reality (VR) applications across multiple platforms—including PC, Android, iOS, and Samsung Gear VR.
          I specialize in building engaging, high-quality interactive experiences using Unity3D and C#. I also have hands-on experience with tools like Blender and GIMP for 3D modeling and asset creation.
          I'm committed to delivering results that meet (and often exceed) client expectations. My work ethic is grounded in clear communication, attention to detail, and a strong focus on creating polished, reliable products.
        </p>
    </div>
    </>
  )
})

export default About