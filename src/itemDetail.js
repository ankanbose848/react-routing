import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, [])

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        const item = await fetchItem.json()
        console.log(item);
        setItem(item);
    } 

    return (
        <div>
            <h1>{ item.title} </h1>
            <p>{ item.body }</p>
        </div>
    );
}

export default Item; 
