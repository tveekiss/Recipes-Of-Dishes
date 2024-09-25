import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/dish.css';

export default function Dish() {
    const params = useParams();
    const [dish, setDish] = useState(null)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/dishes/${params.id}`)
            .then(res => {
                setDish(res.data);
            })
            .catch(err => {
                console.error(err, 'ошибка');
            });
    }, [params.id]);

    if (!dish) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="dish">
            <Link to={'/category/' + dish.category.id} className='back-link'>Блюда</Link>

            <h1 className="dish__name">
                {dish.name}
            </h1>
            <div className="dish__title">
                <img src={dish.image} alt={dish.name} className='dish__image' />
                <p className="dish__description">
                    {dish.description}
                </p>
            </div>
            <div className="dish__ingredients">
                <h1 className='dish__ingredients__title'>Продукты</h1>
                <p className="dish__ingredients">
                    {dish.ingredients}
                </p>
            </div>
            <div className="dish__recipe__title">
                <h1 className='dish_recipe__title'>рецепт</h1>
                <p className="dish__recipe">
                    {dish.recipe}
                </p>
            </div>
        </div>
    );
}