import React, {useState} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hits, setHits] = useState(0);
  const [fouls, setFouls] = useState(0);

  const ResetBalls = () => {
      if(balls >= 4 || strikes >= 3) {
         setBalls(0);
         setStrikes(0);
      } else {
         setBalls(balls+1);
      }
  }
  const ResetStrikes = () => {
     if(balls >=4 || strikes >= 3) {
         setBalls(0);
         setStrikes(0);
     } else {
         setStrikes(strikes+1);
     }
  }
  const ResetHits = () => {
     setBalls(0);
     setStrikes(0);
  }
  return (
    <div className="App">
     <h1>Web Application Testing</h1>
     <Display />
     <Dashboard />
    </div>
  );
}

export default App;
