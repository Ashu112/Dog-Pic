import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./DogPic.module.css"

const DogPic = () => {
  const [breed, setBreed] = useState("Random");
  const [dogImage, setDogImage] = useState("");
  const getDogImage = async () => {
    let url = "https://dog.ceo/api/breeds/image/random";
    const response = await axios.get(url);
    setDogImage(response.data.message)
  };
  
  useEffect(()=>{
    getDogImage();
  },[])

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <label>
          Select a breed:
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="Random">Random</option>
            <option value="Beagle">Beagle</option>
            <option value="Boxer">Boxer</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Husky">Husky</option>
          </select>
        </label>
      </div>
      <img src={dogImage} alt="Dogimg" />
      <br />
      <button>Next</button>
    </div>
  );
};

export default DogPic;
