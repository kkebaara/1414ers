import React from "react"

function MountainCard({ 
    id, 
    name, 
    image, 
    elevation, 
    hikingDistance, 
    difficulty, 
    funFact 
})

{
    return (
        <li className="card_item">
            <div className="card">
                <img
                src={image}
                alt={name}
                className="card_image"
                />
                <div className="card_content">
                    <div className="card_title">{name}</div>
                    <p className="card_detail">{elevation}</p>
                    <p className="card_detail">{hikingDistance}</p>
                    <p className="card_detail">{funFact}</p>
                    <p className="card_detail">{difficulty}</p>
                </div>
            </div> 
        </li>
    )

}

export default MountainCard
