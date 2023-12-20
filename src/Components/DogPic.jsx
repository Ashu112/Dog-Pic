import React from 'react'
import { useState } from "react";

const DogPic = () => {
    const [breed, setBreed] = useState("random");
  return (
    <div>
      <div>
        <label>
          Select a breed
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            defaultValue="random"
          >
           <option value="Random">Random</option>
            <option value="Beagle">Beagle</option>
            <option value="Boxer">Boxer</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Husky">Husky</option>
          </select>
          
        </label>
        </div>
        <img src="" alt="Dogimg"/>
        <br/>
        <button>Next</button>
      </div>
  )
}

export default DogPic
