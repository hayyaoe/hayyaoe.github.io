import profile from "../assets/profile.png"
import portfolio1 from "../assets/portfolio1.png"

function HomePage () {
   useEffect(() => {
    document.title = "HAYYAOE";
  }, []);

  return (
    <>
      <div className="w-screen bg-background px-24">
        
        <p className="pt-28 text-right text-9xl text-secondary-dark font-bar select-none">HAYYA</p>
        
        <div className="font-ibm py-28">
          <p className="text-secondary text-4.5xl select-none">Hi I'm</p>
          <h1 className="text-primary text-9xl font-light -m-2 pt-1 pb-8 select-none">HAYYAOE</h1>
          <p className="text-secondary text-4.5xl max-w-lg select-none">PROGRAMMER - MUSICIAN - PHOTOGRAPHER - RUNNER -</p>
        </div>
        
        <div className="font-ibm py-24 text-3xl text-secondary-dark w-full flex flex-row">
          <a href="https://github.com/hayyaoe"className="flex-auto">GITHUB.COM/HAYYAOE</a>
          <p className="flex-auto text-right select-none">©hayyaoe</p>
        </div>
      </div>

      


      <div className="w-screen bg-background px-42">
        <div className="py-36 flex flex-row">
          
          <img src={profile} alt="profile picture" className="border-secondary border-4"/>
          
          <div className="font-ibm max-w-[37rem] px-8">
            <div>
              <p className="text-secondary text-3xl select-none">I’m a 3rd year student at Informatics Ciputra University currently an <span className="text-primary" >intern at Apple Developer Academy @UC</span> as Tech Learner</p>
            </div>
            <br/>
            <div>
              <p className="text-secondary text-3xl select-none">I love <span className="text-primary">playing music</span></p>
            </div>

            <div className="pt-24">
              <h2 className="text-primary text-3xl select-none">Languages</h2>
              <p className="text-secondary text-3xl select-none">Swift Python JavaScript Kotlin PHP </p>
            </div>

            <div className="pt-8">
              <h2 className="text-primary text-3xl select-none">Frameworks</h2>
              <p className="text-secondary text-3xl select-none">ExpressJS Laravel ReactJS JetpackCompose</p>
            </div>
            
            <div className="pt-8">
              <h2 className="text-primary text-3xl select-none">Tools</h2>
              <p className="text-secondary text-3xl select-none">Git Docker Figma Firebase</p>
            </div>
          </div>
        
        </div>       
      </div>


      <div className="w-screen bg-background px-24">
        <div className="py-24 grid gap-8">
    
          <div className="p-1 max-w-6xl bg-background-light font-ibm">
            <img src={portfolio1} alt="portfolio1" />
            <h3 className="text-background text-4.5xl select-none py-4">ZENITIES - Hyprland Dotfiles</h3>
          </div>


          <div className="p-1 max-w-3xl bg-background-light font-ibm">
            <img src={portfolio1} alt="portfolio1" />
            <h3 className="text-background text-4.5xl select-none py-4">ZENITIES - Hyprland Dotfiles</h3>
          </div>
        
        </div>
      </div>

      

      <div className="w-screen bg-background px-24">
        <div className="py-24 grid gap-28 font-ibm">        
            
            <div className="max-w-[56rem]">
              <h2 className="text-primary text-7xl select-none">MUSIC PERFOMUSICE</h2>
              <p className="text-secondary text-4xl select-none py-2">I’m primarily a vocalist inspired by <span className="text-primary">Chris Cornell</span>, and a guitarist who enjoys playing in the vein of <span className="text-primary">John Mayer</span>.</p>
            </div>
            
            <div className="max-w-[53rem]">
              <h2 className="text-primary text-7xl select-none">MUSIC TASTE</h2>
              <p className="text-secondary text-4xl select-none py-2">I love <span className="text-primary">Blues Rock</span>, with artist like <span className="text-primary">John Mayer</span>, and their album <span className="text-primary">Continuum</span></p>
            </div>
 
            <div className="max-w-[53rem]">
              <h2 className="text-primary text-7xl select-none">PHOTOGRAPHY</h2>
            </div>
            
            <div className="max-w-[53rem]">
              <h2 className="text-primary text-7xl select-none">RUNNING</h2>
            </div>
        
        </div>
      </div>



      <div className="w-screen bg-background px-24">
        <div className="pt-24 pb-60 grid gap-16 font-ibm">        
            
            <div className="max-w-[56rem]">
              <p className="text-secondary text-4.5xl select-none py-2">Email:</p>
              <h2 className="text-primary text-5xl select-none">HAYYAOE@GITHUB.IO</h2>
            </div>
            
            <div className="max-w-[53rem]">
              <p className="text-secondary text-4.5xl select-none py-2">Instagram:</p>
              <h2 className="text-primary text-5xl select-none">@HAYYAOE</h2>
            </div>
 
            <div className="max-w-[53rem]">
              <p className="text-secondary text-4.5xl select-none py-2">GitHub:</p>
              <h2 className="text-primary text-5xl select-none">@hayyaoe</h2>
            </div>
            
            <div className="max-w-[53rem]">
              <p className="text-secondary text-4.5xl select-none py-2">YouTube:</p>
              <h2 className="text-primary text-5xl select-none">@hayaugh</h2>
            </div>
        
        </div>
      </div>
    </>
  );
}

export default HomePage;
