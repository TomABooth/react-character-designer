import React from 'react';
import { useState } from 'react';
import './main.css';
import Controls from '../Controls/controls.js';
import Display from '../Display/display.js';

export default function Main() {
  const [head, setHead] = useState('Head 1');
  const [torso, setTorso] = useState('Torso 1');
  const [legs, setLegs] = useState('Legs 1');
  const [catchphrase, setCatchphrase] = useState('Catchphrase');

  return (
    <main>
      <Controls
        head={head}
        setHead={setHead}
        torso={torso}
        setTorso={setTorso}
        legs={legs}
        setLegs={setLegs}
        catchphrase={catchphrase}
        setCatchphrase={setCatchphrase}
      />
      <Display head={head} torso={torso} legs={legs} catchphrase={catchphrase} />
    </main>
  );
}
