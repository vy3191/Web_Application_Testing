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
      if(balls >= 4 && strikes >= 3) {
         setBalls(0);
         setStrikes(0);
      } else {
         setBalls(balls+1);
      }
  }
  const ResetStrikes = () => {
     if(balls >=4 && strikes >= 3) {
         setBalls(0);
         setStrikes(0);
     } else {
         setStrikes(strikes+1);
     }
  }
  const ResetHits = () => {
     setBalls(0);
     setStrikes(0);
     setHits(hits+1);
  }
  const ResetFouls = () => {
     if(strikes < 1) {
        setStrikes(0);
     } else {
        setStrikes(1)
     }
     setFouls(fouls+1);
  }
  return (
    <div className="App">
     <h1 style={{margin: '40px auto', color: '#afeeee'}}>Web Application Testing</h1>
     <Display balls={balls} strikes={strikes} hits={hits} fouls={fouls} />
     <Dashboard ResetBalls={ResetBalls}
                ResetStrikes={ResetStrikes}
                ResetHits={ResetHits} 
                ResetFouls={ResetFouls}  
                />
    </div>
  );
}

export default App;
