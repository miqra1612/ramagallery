import React, { memo } from 'react'
import { PageType } from './PageType';

interface NavbarProp{
  onSettingPage: (pageName:PageType) => void;
}

const AppHead:React.FC<NavbarProp> = memo(({onSettingPage}) => {
  return (
    <div className="top-0 left-0 w-screen">
    
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
        <div className="align-items-center justify-center mx-auto">
            <h5 className="bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-start text-2xl max-sm:text-xl font-bold  mt-50 max-sm:mt-20"> Hi I'm Rama, wellcome to</h5>
            <h2 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-start text-4xl max-sm:text-2xl font-bold  py-2  mt-1"> My Portfolio Gallery</h2>
            <h5 className="bg-gradient-to-r from-orange-700 to-amber-400 bg-clip-text text-transparent text-start text-xl max-sm:text-sm font-bold   mt-2"> A prove of my journey to bring fun and</h5>
            <h5 className="bg-gradient-to-r from-orange-700 to-amber-400 bg-clip-text text-transparent text-start text-xl max-sm:text-sm font-bold   mt-1"> engaging game and web experience.</h5>
            <div className="flex justify-start my-5">
            <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> onSettingPage(PageType.About)}> Let's get started</button>
            <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md  mx-5 px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/13TvlOR1DAKIo-CLwBvBKkJw9BLONQls9/view?usp=sharing"}> Download CV</button>
        
            </div>
          </div>
        <div className="align-items-center justify-center me-10 mt-15">
            <img src="./image/c1.gif" alt="" className="xl:w-150 md:w-110 max-sm:w-85 xl:h-150 md:h-110 max-sm:h-85 rounded-xl " />
        </div>
    </div>
    </div>
  )
})

export default AppHead