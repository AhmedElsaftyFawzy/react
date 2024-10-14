import React from 'react';


export default function Card (prop) {
    return (
        <div className='container'>
            <img src={process.env.PUBLIC_URL + prop.img} alt={prop.alt} />
            <div>
                <h4><i class="fa-solid fa-location-dot"></i>{prop.location} <a href={prop.link}>View on Google Maps</a></h4>
                
                <h2>{prop.site}</h2>
                <h3>{prop.date}</h3>
                <p>{prop.information}</p>
            </div>
        </div>
    )
}