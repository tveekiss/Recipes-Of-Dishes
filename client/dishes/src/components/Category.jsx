import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/category.css';


export default function Category() {
    const navigate = useNavigate();
    const params = useParams();
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/category/${params.id}`)
        .then(res => {
            setDishes(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [params.id])
    
    return(
        <div className="dishes">
                <Link to="/" className='back-link'>Главная</Link>

            <h1 className="dishes__title">
                Блюда
            </h1>

            <div className="dishes__main">
                {dishes.map((dish) => 
                    <div className="dishes__main__dish" key={dish.id} onClick={() => navigate(`/dish/${dish.id}`)}>
                        <img src={dish.image} alt={dish.name} />
                        <p>{dish.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}