import React from 'react';
import './display.css';

export default function Display({ head, torso, legs }) {
  return (
    <div className="character-container">
      <div className="head-container">
        <img className="head-img" src={`${process.env.PUBLIC_URL}/Head/${head}.png`} />
      </div>
      <div className="torso-container">
        <img className="torso-img" src={`${process.env.PUBLIC_URL}/Torso/${torso}.png`} />
      </div>
      <div className="leg-container">
        <img className="leg-img" src={`${process.env.PUBLIC_URL}/Legs/${legs}.png`} />
      </div>
    </div>
  );
}
