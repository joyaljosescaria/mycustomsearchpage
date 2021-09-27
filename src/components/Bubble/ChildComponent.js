import React, { useRef } from 'react'
import './Child.css'

const ChildComponent = (props) => {

    const inputEl = useRef(null);

    const showDelete = () => {
        inputEl.current.style.display = "block";
    }

    const showNone = () => {
        inputEl.current.style.display = "none";
    }

    const dltTask = (task) => {
        props.dltTask(task)
    }

    return (
        <div onMouseOver={showDelete} onMouseOut={showNone}>
            <h1 style={{ color: "white", background: "red", borderRadius: "50%", width: "180px", alignText: "center", height: "180px", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0000003b" }}>{props.data} <button className="btn" onClick={(e)=>dltTask(props.data)} ref={inputEl}>X</button> </h1>
        </div>
    )
}

export default ChildComponent
