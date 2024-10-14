import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from './data'
import './App.css'

export default function App () {
    const card = data.map(item => <Card {...item}/>)
    return (
        
        <div>
            <Header />
            {card}

        </div>
    )
}