export default function TestComponent(props){
    return (
        <button style={{backgroundColor: "purple", color: "yellow"}} onClick={props.onClick}>{props.text}</button>
    )
}