import './index.css'

export default function GlassContainer(props) {
    return (
        <div style={props.style} className={props.className + " glass1"}>
            {props.children}
        </div>
    )
}