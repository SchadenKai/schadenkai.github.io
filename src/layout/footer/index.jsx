import {footer} from '../../data/index'
import './index.css'

export default function Footer() {
    return (
        <footer className="d-flex justify-content-center w-100 py-3 w-100">
            {footer.description}
        </footer>
    )
}