import { BrowserRouter }     from 'react-router-dom'
import ReactDOM              from 'react-dom'
import App                   from './App'
import React                 from 'react'
import "./styles/index.css"
import "./styles/fonts.css"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App props={null} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)