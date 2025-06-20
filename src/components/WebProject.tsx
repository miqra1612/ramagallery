import { memo } from 'react'

const WebProject = memo(() => {

  const landscapeImgStyle = ()=> {
    return "mx-auto w-[calc(100%-20%)] aspect-video";
  }

  const titleStyle = ()=>{
    return "bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold  mx-10 mt-10 mb-3 max-sm:mt-5";
  }

  const projectPStyle = () => {
    return "bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-sm font-bold mt-5";
  }

   const projectP2Style = () => {
    return "bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-start text-md max-sm:text-sm font-bold mt-5";
  }


  return (
    <>
    <div className="my-25"/>

    <div className="flex flex-col items-center justify-center left-0 w-screen">
        <h3 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold mt-18 p-1">My Web Projects</h3>
        <p className="bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-xl max-sm:text-sm font-bold mx-20 mt-5"> 
          Beside working on a game project, I’ve also worked on a variety of web projects in the past. Feel free to explore some of my work below—enjoy!
        </p>

        <div>
            <h5 className={titleStyle()}> Tokonya Dia - Front-End Web Mockup </h5>

            <div className={landscapeImgStyle()}>       
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/IGMsNdwrfrc?si=asFZTtg8dcFmbGSg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
            </div>

            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://miqra1612.github.io/tokonyadia/"}> Click For Demo </button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (2 months)</h1>

                <p className={projectPStyle()}>
                      As part of the development team, I contributed across multiple areas of the project, including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designed and implemented a fully responsive front-end layout for both desktop and mobile devices.</li>
                    <li className="p-2"> Developed interactive UI components using React and styled them with Bootstrap for a clean and consistent design.</li>
                    <li className="p-2"> Ensured smooth user flow and navigation by applying UI/UX best practices.</li>
                    <li className="p-2"> Created mock product listings, filters, and shopping cart interactions to simulate real-world e-commerce behavior.</li>
                    <li className="p-2"> Tested responsiveness and layout consistency across various screen sizes and modern browsers.</li>
                    <li className="p-2"> Focused on clean code structure and reusability to maintain scalability and readability.</li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectP2Style()}> 
                    Tokonya Dia is a responsive front-end mockup of an online grocery store, created to showcase a clean, modern, and user-friendly shopping experience. 
                    The project was designed to demonstrate the visual and functional potential of a professional grocery e-commerce platform, with an emphasis on responsive design, intuitive layout, and cross-device usability.
                  </p>
                  <p className={projectP2Style()}> 
                    Built using React, Bootstrap, and JavaScript, this mockup adapts seamlessly across desktop and mobile screens, offering a smooth, accessible interface that prioritizes both aesthetics and user experience.
                  </p>
                 
              </div>
              
          </div>
          
        </div>



        <div>
            <h5 className={titleStyle()}> Kuli Corp </h5>
                  
            <div className={landscapeImgStyle()}>       
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/lFK48t2DX4o?si=I75kRcpLCoNDubzk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://miqra1612.github.io/kulicorp/index.html"}> Click For Demo </button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role as Front-End Developer (7 days)</h1>

                <p className={projectPStyle()}>
                      As part of the development team, I contributed to several key features of the project, including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designed and implemented a responsive, mobile-first layout using Bootstrap.</li>
                    <li className="p-2"> Developed the website using TypeScript to enforce type safety and reduce potential runtime errors.</li>
                    <li className="p-2"> Structured and styled content to clearly present services, company values, and contact information.</li>
                    <li className="p-2"> Optimized UI for fast loading and cross-browser compatibility.</li>
                    <li className="p-2"> Ensured semantic HTML and accessible design for improved SEO and usability.</li>
                    <li className="p-2"> Integrated interactive elements where necessary to enhance user engagement without overcomplicating the user experience.</li>
                    
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectP2Style()}> 
                    Kuli Corp is a professional, fully responsive static website developed for a construction company. The site is designed to reflect the company's reliability and professionalism,
                    featuring a clean layout, intuitive navigation, and clear presentation of services and contact information.
                  </p>

                  <p className={projectP2Style()}>
                    The project was built using TypeScript to ensure robust and maintainable code, and Bootstrap for efficient, mobile-friendly styling. The focus was on delivering a polished user experience with strong type safety and modern web standards.
                  </p>

              </div>
              
          </div>
          
        </div>

    </div>
    </>
  )
})

export default WebProject