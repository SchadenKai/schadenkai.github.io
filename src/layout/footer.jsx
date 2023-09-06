import {footer} from '../data/index'

export default function Footer() {
    return (
        <div style={{borderRadius : "0px"}} className="d-flex justify-content-center w-100 glass1 py-3">
            {footer.description}
        </div>
    )
}