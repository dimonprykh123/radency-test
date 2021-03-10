import React, {useState} from "react"
import {render} from "react-dom"
import FileUploader from "./components/FileUploader/FileUploader";
import "./index.css"
import Main from "./components/Main/Main";

const App = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    return (
        <div className="container">
            <FileUploader setUsers={setUsers} setError={setError}/>
            <Main users={users} error={error}/>
        </div>
    )
}

render(<App/>, document.getElementById("root"))