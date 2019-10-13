import React from 'react';
import {Button} from 'react-bootstrap';


function Dashboard({ResetBalls, ResetStrikes, ResetHits, ResetFouls}) {
  return (
    <div>
      <Button variant="primary" onClick={ResetBalls}>Ball</Button>
      <Button variant="primary" onClick={ResetStrikes}>Strike</Button>
      <Button variant="primary" onClick={ResetHits}>Hit</Button>
      <Button variant="primary" onClick={ResetFouls}>Foul</Button> 
    </div>
  )
}

export default Dashboard
