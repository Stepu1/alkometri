import React, { useState } from 'react';
import './App.css'

const BloodAlcoholCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [bac, setBAC] = useState(0);

  const calculateBAC = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);

    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    setBAC(result);
  };

  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>
          Weight 
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div className="input-container">
  <label>
    Gender:
    <select value={gender} onChange={(e) => setGender(e.target.value)}>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </label>
</div>
      <div>
        <label>
          Bottles
          <input type="number" value={bottles} onChange={(e) => setBottles(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Time 
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={calculateBAC}>Calculate</button>
      </div>
      <div>
        <h2>Alcohol blood level: {bac.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default BloodAlcoholCalculator ;