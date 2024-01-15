import {about, socialLinks} from '../data'

export default function LandingPage() {
  return (
    // section wrapper
    <section id="home" className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      {/* card wrapper */}
      <div className="glass1 h-auto"> 
          {/* text column */}
          <div className="py-4 px-5">
            <h1 className='py-2' style={{ fontSize: "2.5rem" }}>{about.name}</h1>
            <p>
              {about.description}
            </p>
            <div className="w-100 d-flex mt-4">
              <p>Socials</p>
              <p className="ms-4"> | </p>
              <div className=" w-50 d-flex gap-1 justify-content-evenly">
                {socialLinks.map(social => {
                  return (
                    <a key={social.name} href={social.url} target="_blank">
                      <img
                        height="30px"
                        width="30px"
                        src={social.imageUrl}
                        alt={social.name}
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>  
      </div>
    </section>
  );
}
