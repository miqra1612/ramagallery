import { memo } from 'react'

const Skill = memo(() => {
    const skillStyle = ()=> {
        return "bg-orange-900 border-orange-900 hover:bg-orange-700 hover:border-lime-200 hover:text-lime-200 border-2 text-xl max-sm:text-sm text-white p-1 rounded-2xl";
    }

  return (
     <>
    <div className="flex flex-col items-center justify-center left-0 w-screen h-screen bg-stone-900 min-sm:mt-90 min-sm:mb-80">
        <h3 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold mt-5 p-1">Skills & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 gap-4 justify-center mt-10 mb-20"> 
            <div className={skillStyle()}> Unity</div>
            <div className={skillStyle()}> C#</div>
            <div className={skillStyle()}> AR</div>
            <div className={skillStyle()}> VR</div>
            <div className={skillStyle()}> Google Ads</div>
            <div className={skillStyle()}> Unity Ads</div>
            <div className={skillStyle()}> Appsflyer</div>
            <div className={skillStyle()}> Playfab</div>
            <div className={skillStyle()}> Firebase</div>
            <div className={skillStyle()}> UniTask</div>
            <div className={skillStyle()}> Android</div>
            <div className={skillStyle()}> IOS</div>
            <div className={skillStyle()}> Bootstrap</div>
            <div className={skillStyle()}> React</div>
            <div className={skillStyle()}> Typescript</div>
            <div className={skillStyle()}> HTML</div>
            <div className={skillStyle()}> CSS</div>
            <div className={skillStyle()}> Tailwind</div>
            <div className={skillStyle()}> GIMP</div>
            <div className={skillStyle()}> Blender</div>
            <div className={skillStyle()}> Audacity</div>
            <div className={skillStyle()}> Openshot</div>
            <div className={skillStyle()}> Handbrake</div>
            <div className={skillStyle()}> Github</div>
            <div className={skillStyle()}> Gitlab</div>
            <div className={skillStyle()}> Agile</div>
            <div className={skillStyle()}> Team work</div>


        </div>
    </div>
    </>
  )
})



export default Skill