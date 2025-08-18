import React from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import "./App.css";
import { useState } from 'react';

export default function App() {

  const [Songs, setSongs] = useState([
  ]);


  return (
    <>
      <FacialExpression  setSongs={setSongs}/>
      <MoodSongs Songs={Songs}/>
    </>
  );
}