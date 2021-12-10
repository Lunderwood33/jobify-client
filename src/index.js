import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Jobify } from "./components/Jobify.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Jobify />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
