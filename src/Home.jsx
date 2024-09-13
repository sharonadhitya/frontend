import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/reservoirs/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.reservoir_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home