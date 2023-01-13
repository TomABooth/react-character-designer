import React from 'react';
import './controls.css';

export default function Controls({ head, setHead, torso, setTorso, legs, setLegs, catchphrase, setCatchphrase }) {
  return (
    <div className="inputs">
      <label>Head</label>
      <select value={head} onChange={(e) => setHead(e.target.value)}>
        <option>Head 1</option>
        <option>Head 2</option>
        <option>Head 3</option>
      </select>
      <label>Torso</label>
      <select value={torso} onChange={(e) => setTorso(e.target.value)}>
        <option>Torso 1</option>
        <option>Torso 2</option>
        <option>Torso 3</option>
      </select>
      <label>Legs</label>
      <select value={legs} onChange={(e) => setLegs(e.target.value)}>
        <option>Legs 1</option>
        <option>Legs 2</option>
        <option>Legs 3</option>
      </select>
      <label>Catchphrase</label>
      <textarea type="text" name="Catchphrase" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
      <p className="record">
        You have changed your head 0 times, your torso 0 times and your legs 0 times.
      </p>
    </div>
  );
}
