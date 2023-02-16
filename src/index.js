import React from 'react';
import { createRoot } from 'react-dom/client';
import RenderAllPosts from './components/renderAllPosts';
import Form from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

const App = () => { 
    return ( 
    <div>
    <Form />
    <RenderAllPosts />
    </div>
    )
 }

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
<Router>
    {
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<App />}></Route>
        </Routes>
    }
</Router>
)