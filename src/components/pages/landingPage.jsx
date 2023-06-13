import {about, socialLinks} from '../../constants/index'

export default function LandingPage() {
  return (
    <page className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <card className="glass1 w-50 h-auto">
        <div className="row h-100 w-100">
          <div className="col-8 py-4 px-5">
            <h1 style={{ fontSize: "2.5rem" }}>{about.name}</h1>
            <p>
              {about.description}
            </p>
            <div className="w-100 d-flex mt-4">
              <p>Socials</p>
              <p className="ms-4"> | </p>
              <div className=" w-100 d-flex justify-content-evenly">
                {socialLinks.map(social => {
                  return (
                    <a href={social.url} target="_blank">
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
          <div className="col-4">
            <div className="profile_img bg-info">
              <img src={about.imageUrl} alt="profile image" />
            </div>
          </div>
        </div>
      </card>
    </page>
  );
}
