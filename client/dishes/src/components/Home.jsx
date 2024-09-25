import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/category')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, categories)

    return (
        <div className="home">
            <h1 className="home__title">
                Категории
            </h1>

            <div className="home__main">
                {categories.map((category) => 
                    <div className="home__main__category" key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
                        <img src={category.image} alt={category.name} />
                        <p>{category.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
