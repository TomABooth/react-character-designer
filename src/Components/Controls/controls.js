import React from 'react';
import './controls.css';

export default function Controls({
  head,
  setHead,
  torso,
  setTorso,
  legs,
  setLegs,
  catchphrase,
  setCatchphrase,
  headCount,
  setHeadCount,
  torsoCount,
  setTorsoCount,
  legCount,
  setLegCount,
}) {
  const handleChange = (e) => {
    e.target.name === 'head' &&
      setHead(
        e.target.value,
        setHeadCount(() => {
          return headCount + 1;
        })
      );
    e.target.name === 'torso' &&
      setTorso(
        e.target.value,
        setTorsoCount(() => {
          return torsoCount + 1;
        })
      );
    e.target.name === 'legs' &&
      setLegs(
        e.target.value,
        setLegCount(() => {
          return legCount + 1;
        })
      );
  };
  return (
    <div className="inputs">
      <label>Head</label>
      <select name="head" value={head} onChange={handleChange}>
        <option>Head 1</option>
        <option>Head 2</option>
        <option>Head 3</option>
      </select>
      <label>Torso</label>
      <select name="torso" value={torso} onChange={handleChange}>
        <option>Torso 1</option>
        <option>Torso 2</option>
        <option>Torso 3</option>
      </select>
      <label>Legs</label>
      <select name="legs" value={legs} onChange={handleChange}>
        <option>Legs 1</option>
        <option>Legs 2</option>
        <option>Legs 3</option>
      </select>
      <label>Catchphrase</label>
      <textarea
        type="text"
        name="Catchphrase"
        value={catchphrase}
        onChange={(e) => setCatchphrase(e.target.value)}
      />
      <p className="record">
        You have changed your head {headCount} times, your torso {torsoCount} times and your legs{' '}
        {legCount} times.
      </p>
    </div>
  );
}
