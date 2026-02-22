import React from 'react'
import { MapPin } from 'lucide-react'
const Card = (prop) => {
    const handleReserve = () =>{
        alert("Reserved!");
    }
    return (
        <div className='card-parent'>
            <div className="card-image" style={{ backgroundImage: `url('${prop.property.image}')` }}></div>
            <div className="card-body">
                <div className="top">
                    <h2>{prop.property.title}</h2>
                    <h3 className='price-tag'>{prop.property.price}</h3>
                </div>
                <div className="location">
                    <MapPin strokeWidth={1.5} size={20} color='white' />
                    <h4 className="location-name">{prop.property.location}</h4>
                </div>
                <div className="desc-center">
                    <p>{prop.property.description}</p>
                </div>
                <div className="tags">
                    {prop.property.tags.map(function (tag) {
                        return <p>{tag}</p>
                    })}
                </div>
                <div className="bottom">

                    <button className="reserve-btn" onClick={handleReserve}>Reserve</button>
                </div>
            </div>
        </div>
    )
}

export default Card