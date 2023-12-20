/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./DogPic.module.css";

const DogPic = () => {
  const [breed, setBreed] = useState("Random");
  const [dogImage, setDogImage] = useState("");

  const getDogImage = async (breed) => {
    try {
      let url = "";
      if (breed === "Random") {
        url = "https://dog.ceo/api/breeds/image/random";
      } else {
        url = `https://dog.ceo/api/breed/${breed}/images/random`;
      }

      const response = await axios.get(url);
      setDogImage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextButton = ()=>{
        if(breed === "Random"){
            getDogImage("Random")
        }else{
            getDogImage(breed)
        }
  }

  useEffect(() => {
    getDogImage(breed);
  }, [breed]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <label>
          Select a breed:
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="Random">Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </label>
      </div>
      <img src={dogImage} alt="Dogimg" />
      <br />
      <button onClick={handleNextButton}>Next</button>
    </div>
  );
};

export default DogPic;
