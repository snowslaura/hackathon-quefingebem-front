import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../Pages/Home';
import Questions from '../Pages/Questions';
import Answers from '../Pages/Answers';

import './../assets/styles.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/answers" element={<Answers />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;