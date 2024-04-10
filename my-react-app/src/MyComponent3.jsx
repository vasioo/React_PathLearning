import React, { useState } from 'react'

function MyComponent3() {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    function handleYearChange(event) {
        setCar(c=> ({ ...c, year: event.target.value }));
    }
    function handleMakeChange(event) {
        setCar(c=> ({ ...c, make: event.target.value }));
    }
    function handleModelChange(event) {
        setCar(c=> ({ ...c, model: event.target.value }));
    }

    return (
        <div>
            <p> Your fav car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handleYearChange}></input>
            <input type='text' value={car.make} onChange={handleMakeChange}></input>
            <input type='text' value={car.model} onChange={handleModelChange}></input>
        </div>
    )
}

export default MyComponent3