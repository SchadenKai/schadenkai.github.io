import {footer} from '../../data/index'
import './index.css'

export default function Footer() {
    return (
        <footer className="flex justify-center w-100 py-3 w-100">
            {footer.description}
        </footer>
    )
}