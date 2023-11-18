import { awards } from "../../data";
import './index.css'

export default function AwardsPage() {
    return (
        <div id="awards" className="w-100 d-flex flex-column align-items-center mb-5">
            <div className="glass1 p-4">
                <h3 className="text-warning mb-4">Awards</h3>
                {
                    awards.map(award => {
                        return(
                            <div key={award.name} className="w-100 mb-4">
                                <div className="d-flex flex-column">
                                    <h3>{award.name + " " + award.date}</h3>
                                    <h5>{"🏢 " + award.issuer}</h5>
                                    <h6>{"📍 " + award.location}</h6>
                                    <p>{award.description}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    {award.imageUrl.map(url => {
                                        return(
                                            <img width='100%' src={url} alt={award.name}/>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}