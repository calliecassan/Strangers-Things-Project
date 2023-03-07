import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import RenderAllPosts from './components/RenderAllPosts';
import LoginForm from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Profile from './components/Profile';
import NewPost from './components/NewPost';



const App = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[postList, setPostList] = useState([]);
    return ( 
    <div>
        <div>
            <LoginForm isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
        </div>
        <div>
            <NewPost isLoggedIn = {isLoggedIn} postList = {postList} setPostList = {setPostList}/>
        </div>
        <div>
            <RenderAllPosts postList = {postList} setPostList = {setPostList} />
        </div>
    </div>
        )
    }

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
<Router>
    {
        <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/" element={<App />}/>
            <Route path="/Profile" element={<Profile />}/>
       </Routes>
    }
</Router>
)