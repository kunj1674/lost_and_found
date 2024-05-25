import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await api.getItems();
            setItems(res.data);
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h2 className='text-white text-center'>Lost and Found Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.found ? 'Found' : 'Lost'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
