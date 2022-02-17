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
        <li className="card">
            <img src={image} alt={name} />
            <div className="card_content"></div>
                <h4>{name}</h4>
                <p>Hiking Distance: {hikingDistance}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Fun Fact! : {funFact} </p>
                <p>Elevation : {elevation} </p>
        </li>
    )
}

export default MountainCard