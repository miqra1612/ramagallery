import { memo } from 'react'

const Project = memo(() => {

  const landscapeImgStyle = ()=> {
    return " xl:w-300 md:w-200 max-sm:w-65 xl:h-150 md:h-100 max-sm:h-35 rounded-xl mx-auto";
  }

  const potraitImgStyle = ()=>{
    return " xl:w-80 md:w-70 max-sm:w-65 xl:h-150 md:h-80 max-sm:h-75 rounded-xl mx-auto";
  }

  const titleStyle = ()=>{
    return "bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold  mx-10 mt-10 mb-3 max-sm:mt-5";
  }

  const projectPStyle = () => {
    return "bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-sm font-bold mt-5";
  }

  return (
    <>
    <div className="my-25"/>

    <div className="flex flex-col items-center justify-center left-0 w-screen md">
        <h3 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold mt-5 p-1">My Game Projects</h3>
        <p className="bg-gradient-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent text-xl max-sm:text-sm font-bold mx-20 mt-5"> 
          Over the past 8 years, I’ve worked on a variety of projects for PC and Android. Feel free to explore some of my work below—enjoy!
        </p>

        <div>
            <h5 className={titleStyle()}> Cryptofights Ascencion - 3D Turn-Based Online Game </h5>
                  
            <img src="./image/cfsa1.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://play.google.com/store/apps/details?id=com.fyxgaming.cfsa&pcampaignid=web_share"}> Download to try it</button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role at FYX Gaming (2.5 Years)</h1>

                <p className={projectPStyle()}>
                      As part of the development team at FYX Gaming, I contributed across multiple areas of the project, including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Character creation and customization system improvement</li>
                    <li className="p-2"> Skill and progression systems improvement</li>
                    <li className="p-2"> Item creation and inventory management improvement</li>
                    <li className="p-2"> Dungeon and boss implementation</li>
                    <li className="p-2"> Marketplace functionality and trading mechanics</li>
                    <li className="p-2"> Third-party API integration (PlayFab, FYXGateway, Appsflyer)</li>
                    <li className="p-2"> Backend development for player progression, skills, and combat logic</li>
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Cryptofights is a 3D turn-based online game inspired by the classic dungeon-and-dragon style. Players can battle powerful dungeon bosses in solo adventures or challenge each other in real-time PvP duels. 
                    Set in a fantasy world filled with mysterious dungeons, the game invites players on an epic journey to conquer enemies, earn rewards, and rise through the ranks.
                  </p>
                  <p className={projectPStyle()}> 
                    In addition to combat, Cryptofights features a player-driven economy where users can trade or sell in-game items for cryptocurrency or other valuable gear via the FYXGateway portal.
                  </p>
                  <p className={projectPStyle()}>
                      This project sharpened my skills in Unity3D, C# development, and scalable game architecture while giving me experience working in a collaborative, live-service game environment.
                  </p>

              </div>
              
          </div>
          
        </div>



        <div>
            <h5 className={titleStyle()}> Rocky Rampage: Wreck ’em Up – 2D Action Game </h5>
                  
            <img src="./image/rr1.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1a5esR5ZLI7g1BFHf7hKcG9WcUo4pq1JH/view?usp=sharing"}> Download to try it</button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role at Joyseed Game Studio (10 months)</h1>

                <p className={projectPStyle()}>
                      As part of the development team, I contributed to several key features of the game, including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Implementing the vehicle system for Chapter 3</li>
                    <li className="p-2"> Creating unique Wonderpants items with special effects</li>
                    <li className="p-2"> Expanding the in-game quest system for a richer player experience</li>
                    <li className="p-2"> Developing the front-end mail system to support in-game event messaging</li>
                    <li className="p-2"> In App Purchase improvement</li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Rocky Rampage is a fast-paced 2D action game released on both the Google Play Store and Apple App Store by Joyseed Game Studio. The game follows the hilarious and heroic journey of Boulder, 
                    a brave adventurer on a quest to reclaim his stolen Wonderpants collection. Players can gather resources, ride a variety of vehicles, and battle the wicked Empress Scissor and her quirky minions.
                  </p>

                  <p className={projectPStyle()}>
                    This project gave me hands-on experience in mobile game development and reinforced my ability to create fun, engaging gameplay mechanics and scalable UI systems using Unity and C#.
                  </p>

              </div>
              
          </div>
          
        </div>


        <div>
            <h5 className={titleStyle()}> Palace of Enlightenment v1.0 – 2D Career Simulation Game </h5>
                  
            <img src="./image/poe1.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={() => location.href="https://drive.google.com/file/d/1TNy2ZkHMkdVGcrdSgDpOQAmLyf6dtqmA/view?usp=sharing"}> Download to try it</button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role at Arcane Art (1 Years)</h1>

                <p className={projectPStyle()}>
                      As part of the development team at Arcane Arts, I contributed across multiple areas of the project, including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Character creation and customization system</li>
                    <li className="p-2"> Develop the game progression systems</li>
                    <li className="p-2"> Development of several mini games with unique gameplay</li>
                    <li className="p-2"> Cooking system implementation</li>
                    <li className="p-2"> Visual novel system implementation</li>
                    <li className="p-2"> Creating the prototype from the ground up</li>
                    <li className="p-2"> Building the game for Android deployment</li>
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Palace of Enlightenment v1.0 is a 2D mobile game developed for the Android platform in collaboration with Arcane Arts Studio. The game follows the journey of a determined mouse striving 
                    to build his career from the ground up and reach the top.
                  </p>
                  <p className={projectPStyle()}> 
                   As players progress, they encounter a variety of fun and challenging gameplay scenarios that mirror real-life career experiences. Along the way, the game offers meaningful insights and 
                   practical wisdom to help players reflect on their own personal growth and ambitions.
                  </p>
                 

              </div>
              
          </div>

          
          
        </div>

        
        <div>
            <h5 className={titleStyle()}> Survival Planet – 3D Survival Game (PC, Steam) </h5>
                  
            <img src="./image/si.jpg" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1tzBiAbrWBkZMf14Bf6fz3i0Rd8GRwjcP/view?usp=sharing"}> Download to try it</button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role ss the lead programmer (1.5 Years)</h1>

                <p className={projectPStyle()}>
                     As the lead programmer, I was responsible for bringing the game to life—from initial concept design to a fully playable experience. I developed core gameplay systems including:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Resource gathering and crafting</li>
                    <li className="p-2"> Combat mechanics with alien wildlife</li>
                    <li className="p-2"> Survival systems (health, hunger, stamina, etc.)</li>
                    <li className="p-2"> Inventory and tool usage</li>
                    <li className="p-2"> Game progression and environmental interaction</li>
                    <li className="p-2"> Base building system</li>
                    <li className="p-2"> Building the game for PC and Steam deployment</li>
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Survival Planet is a 3D survival adventure game released on Steam for PC. The story follows a lone survivor of a deep-space exploration mission whose ship crash-lands on a mysterious 
                    Class M planet called Aldebaran. To survive, players must gather resources, craft essential tools, hunt alien creatures, and face harsh environments—all while searching for a way to reconnect with Earth.
                  </p>
                  <p className={projectPStyle()}> 
                   This project showcases my ability to design and implement complex systems in Unity3D using C#, and to deliver a complete game for a commercial platform.
                  </p>
                 

              </div>
              
          </div>

        </div>

        <div>
            <h5 className={titleStyle()}> Fluffy Rush – Endless Runner Game for Kids (Android) </h5>
                  
            <img src="./image/fluffy.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://play.google.com/store/apps/details?id=com.MiramaStudio.FluffyRush&pcampaignid=web_share"}> Download to try it</button>
            </div>  
        
        

          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (2 months)</h1>

                <p className={projectPStyle()}>
                      As the lead developer on this project, I was responsible for:

                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designing and building the gameplay using the Forever Endless Runner framework</li>
                    <li className="p-2"> Creating and integrating characters, levels, and child-friendly visuals</li>
                    <li className="p-2"> Optimizing performance and controls for a smooth, intuitive experience on mobile devices</li>
                    <li className="p-2"> Implementing Unity Ads SDK for non-intrusive, age-appropriate monetization</li>
                    <li className="p-2"> Structuring the project for modularity and reuse in future game developments</li>
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Fluffy Rush is a fun and lighthearted endless runner game designed for children aged 3 and up. Featuring four adorable animal characters and over ten colorful, easy-to-play levels, 
                    the game offers an engaging experience tailored to young players. Developed using the Forever Endless Runner toolkit, the game was built with scalability in mind—allowing for seamless future updates with additional content.
                  </p>
                  <p className={projectPStyle()}> 
                    While it provides a complete and enjoyable experience on its own, Fluffy Rush also functions as a reusable template for future endless runner projects, combining engaging gameplay with development efficiency.
                  </p>
                  <p className={projectPStyle()}>
                      This project highlights my skills in creating scalable, monetized mobile games that are both entertaining and development-friendly—especially for younger audiences.
                  </p>

              </div>
              
          </div>
          
        </div>

        
        <div>
            <h5 className={titleStyle()}> Mobile VR Laboratory – 3D Virtual Reality App (Android) </h5>
                  
            <img src="./image/vrm.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/17LzLMHZMn2MrFQHsd-M5i64Zr4EtczxA/view?usp=sharing"}> Download to try it</button>
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role at this project (3 months)</h1>

                <p className={projectPStyle()}>
                      I served as the lead developer on this project, responsible for designing and implementing the entire VR experience using Unity3D. My work included:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Creating optimized 3D environments for mobile performance</li>
                    <li className="p-2"> Implementing VR navigation and interaction systems</li>
                    <li className="p-2"> Integrating sensor support for gyroscope and accelerometer</li>
                    <li className="p-2"> Ensuring compatibility with various VR headsets and Bluetooth controllers</li>
                   
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                    Mobile VR Laboratory is a 3D virtual reality experience designed for Android devices, offering an immersive walkthrough of a detailed university laboratory building. 
                    Users can explore five fully modeled floors, each filled with realistic rooms and furnishings that replicate an actual academic lab environment.
                  </p>
                  <p className={projectPStyle()}> 
                   The app is compatible with smartphones that support gyroscope or accelerometer sensors and is best experienced using a VR headset paired with a Bluetooth controller.
                  </p>
                  <p className={projectPStyle()}> 
                   This project allowed me to apply my skills in VR development, mobile optimization, and interactive design to deliver a smooth and immersive experience.
                  </p>

              </div>
              
          </div>

        </div>

        
        <div>
            <h5 className={titleStyle()}> Peace Hunter – Augmented Reality (AR) Educational Game (Android) </h5>
                  
            <img src="./image/pch.png" alt="" className={potraitImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1XwzevfXIxRS9h4D2rEXdicjGmMDgl4kR/view?usp=sharing"}> Download to try it</button>
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md ms-5 px-4 py-2" onClick={()=> location.href = "https://drive.google.com/drive/folders/1S1W58LCV8a6FhS-M5tMI9pw7qwAmw5Cf?usp=sharing"}> Download marker for the game</button>
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (3 months)</h1>

                <p className={projectPStyle()}>
                      As the lead developer and instructor, I was responsible for:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designing and developing the game using Unity3D and Vuforia AR SDK </li>
                    <li className="p-2"> Creating the AR image recognition system tied to real-world murals </li>
                    <li className="p-2"> Building the interactive quiz system that drives gameplay progression </li>
                    <li className="p-2"> Guiding students through the development process and demonstrating AR implementation in Unity </li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                      Peace Hunter is an educational AR game developed for the Android platform using Unity3D and Vuforia. The project was created as part of a collaboration between BPPLK Cevest and the Ministry of Labour of the Republic of Indonesia 
                      to introduce students to AR technology in a fun and interactive way.

                  </p>
                  <p className={projectPStyle()}> 
                      The game follows the story of ten wise clerics who have been kidnapped by an evil entity named Koraks and imprisoned inside ten unique wall murals located around the BPPLK Cevest campus. To free the clerics and complete the game, 
                      players must use their smartphone cameras to scan each mural and correctly answer a series of questions related to the game’s storyline and learning content.
                  </p>
                  <p className={projectPStyle()}> 
                      This project highlights my ability to combine technology and education, turning abstract AR concepts into an engaging hands-on learning experience for students.
                  </p>
                 

              </div>
              
          </div>

        </div>

         <div>
            <h5 className={titleStyle()}> Nano Milenial Force – Educational Action Game (Android) </h5>
                  
            <img src="./image/nano.png" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1diMQioRa2pe8wURRPEO77jUkz9Ve3IO0/view?usp=sharing"}> Download to try it</button>
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (3 months)</h1>

                <p className={projectPStyle()}>
                      As the lead developer and instructor, I was responsible for:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designing and developing the entire game using Unity3D </li>
                    <li className="p-2"> Creating a structured learning experience through level-based progression </li>
                    <li className="p-2"> Implementing enemy AI, player controls, and game logic </li>
                    <li className="p-2"> Guiding students through each development stage as part of a hands-on game programming curriculum </li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                      Nano Milenial Force is a 2D action game developed for the Android platform as part of an educational initiative at BPPLK Cevest, in collaboration with the Ministry of Labour of the Republic of Indonesia. 
                      The game was designed to serve as a teaching module for students learning game development using Unity3D.

                  </p>
                  <p className={projectPStyle()}> 
                      The story follows Nano, a brave superhero on a mission to defeat the skeleton army and their powerful leader, Koraks. The game features three levels of increasing difficulty, 
                      each designed to teach students different gameplay mechanics and programming concepts in a hands-on, engaging way.
                  </p>
                  <p className={projectPStyle()}> 
                      This project highlights my ability to develop educational games and teach Unity3D in a practical, interactive format—combining technical execution with effective instruction.
                  </p>
                 

              </div>
              
          </div>

        </div>

         <div>
            <h5 className={titleStyle()}> Mandalika VR 2018 – Virtual Reality Tourism App (Android) </h5>
                  
            <img src="./image/mandalika2018.jpg" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1H5Zz_HpqIhGoTFnXjcxXMX-aNcfd-gVt/view?usp=sharing"}> Download to try it</button>
                
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (4 days)</h1>

                <p className={projectPStyle()}>
                      As the lead programmer on this project, I was responsible for:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Implementing all interactive and immersive features of the VR app </li>
                    <li className="p-2"> Integrating the Oculus VR SDK and later porting the app to Google VR SDK </li>
                    <li className="p-2"> Setting up and optimizing all VR360 assets and scenes for mobile performance </li>
                    <li className="p-2"> Delivering a fully functional, polished VR experience within a tight 4-day development window </li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                      Mandalika VR 2018 is a virtual reality tourism app developed to showcase the natural beauty and investment potential of Mandalika, NTB (West Nusa Tenggara), Indonesia. Originally built for Samsung Gear VR using the Oculus VR SDK, 
                      the app was later adapted for wider accessibility using the Google VR SDK, making it compatible with Android smartphones and Google Cardboard.

                  </p>
                  <p className={projectPStyle()}> 
                      The app offers immersive 360-degree views of several beach locations across the Mandalika region, designed specifically to attract investors by highlighting the area’s tourism and business opportunities.
                  </p>
                  <p className={projectPStyle()}> 
                      This project demonstrates my ability to work efficiently under pressure, adapt to multiple VR platforms, and deliver high-quality immersive applications for real-world use cases.
                  </p>
                 

              </div>
              
          </div>

        </div>

         <div>
            <h5 className={titleStyle()}> Rabbit Rush – Casual Endless Runner Game (Android) </h5>
                  
            <img src="./image/rabbit.jpg" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/1FnPln-8r96kq0gQ2vboK4kW-yLCaw-Y_/view?usp=sharing"}> Download to try it</button>
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (21 days)</h1>

                <p className={projectPStyle()}>
                      As the lead programmer for this project, I was responsible for:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Designing and implementing all core gameplay systems </li>
                    <li className="p-2"> Creating the skill upgrade system to enhance player progression </li>
                    <li className="p-2"> Integrating AdMob SDK for in-game advertisements </li>
                    <li className="p-2"> Building and balancing level design to ensure a smooth difficulty curve </li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                      Rabbit Rush is a light and entertaining Android game designed for casual play. Players take control of an energetic rabbit that dashes forward, smashing through obstacles and collecting food items while racing to the finish line. 
                      The game combines fast-paced action with simple, addictive mechanics, making it perfect for short play sessions.

                  </p>
                  <p className={projectPStyle()}> 
                      Originally developed as a client-requested addition to their mobile game library, Rabbit Rush offers upgradeable skills, multiple levels, and integrated ads for monetization.
                  </p>
                  <p className={projectPStyle()}> 
                      This project highlights my ability to deliver polished, client-driven mobile games with monetization and gameplay systems built from the ground up using Unity3D and C#.
                  </p>
                 

              </div>
              
          </div>

        </div>

         <div>
            <h5 className={titleStyle()}> Green Building Simulator – Educational Simulation App (Android) </h5>
                  
            <img src="./image/green.jpg" alt="" className={landscapeImgStyle()} />
            
            <div className="flex justify-center my-5">
                <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-amber-500 text-white hover:text-lime-200 font-bold rounded-md px-4 py-2" onClick={()=> location.href = "https://drive.google.com/file/d/19btpZnv98ReXwiN1wjguAv3BL3GcdJub/view?usp=sharing"}> Download to try it</button>
            </div>  
        
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 bg-stone-900">
              
              <div className="align-items-center justify-center mx-10 mt-5">
                <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">My Role (6 months)</h1>

                <p className={projectPStyle()}>
                      As the lead programmer for this project, I was responsible for:
                </p> 
                  
                <ul className="text-amber-600 text-start text-xl max-sm:text-sm list-outside list-disc  mx-5 p-5">
                    <li className="p-2"> Developing all core features and user interactions based on certification requirements </li>
                    <li className="p-2"> Designing and implementing the app’s interactive 3D background environments </li>
                    <li className="p-2"> Creating a user-friendly experience that translates technical content into an accessible simulation </li>
                    <li className="p-2"> Optimizing performance for Android devices while maintaining visual quality </li>
                    
                </ul>
              </div>

              <div className="align-items-center justify-center mx-10 mt-5">
                  <h1 className="bg-gradient-to-r from-orange-600 to-amber-300 bg-clip-text text-transparent text-start text-xl max-sm:text-xl font-bold mb-2 max-sm:mt-2">Summary</h1>

                  <p className={projectPStyle()}> 
                      Green Building Simulator is an Android application developed to help building owners and property developers understand and prepare for Green Building Certification. 
                      The app provides an interactive simulation that guides users through the certification process, outlining the required documents, infrastructure, and environmental standards.
                  </p>
                  <p className={projectPStyle()}> 
                      By turning a complex certification system into an engaging and informative experience, the app serves as a practical tool for users looking to align their projects with sustainable building practices.
                  </p>
                  <p className={projectPStyle()}> 
                      This project demonstrates my ability to turn real-world regulatory processes into intuitive digital experiences using Unity3D and C#.
                  </p>
                 

              </div>
              
          </div>

        </div>

    </div>
    </>
  )
})

export default Project