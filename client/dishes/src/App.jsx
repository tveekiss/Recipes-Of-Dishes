import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';
import Category from './components/category';
import Dish from './components/Dish';

import './styles/main.css';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/dish/:id" element={<Dish />} />
            </Routes>
        </div>
    )
}