import React from 'react'

import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './styles/theme'

import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

import './styles/css/toastify.css'
import {ToastContainer} from "react-toastify";
import Main from "./pages/main";

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>

                <Routes>
                    <Route path="*" element={<Main/>}/>
                </Routes>

            </ThemeProvider>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                theme={"colored"}
                closeOnClick
                closeButton={false}/>
        </Router>
    )
}

export default App;
