import React from 'react'
import '../assets/css/card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Lorem ipsum dolor sit</h4>
            <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae corrupti eius asperiores ab earum reiciendis magnam vero, quo amet? Blanditiis
                expedita obcaecati repellat aliquam harum, odio modi nihil itaque dignissimos?
            </p>

            <div className="card-container-buttons">
                <button>Buy</button>
                <button>Show</button>
            </div>
        </div>
    )
}

export default Card