import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticlePage from './components/ArticlePage';
import HomePage from './components/HomePage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
    </Router>
);

export default App;