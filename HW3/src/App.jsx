import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      alert('Время вышло!');
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setSeconds(Number(inputValue));
    setIsRunning(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="timer-container">
      <h1>Таймер</h1>
      <div className="input-container">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите количество секунд"
          className="input-field"
        />
        <button onClick={handleStart} className="start-btn">
          Старт
        </button>
      </div>
      <div className="timer-display">
        <p>{seconds}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
