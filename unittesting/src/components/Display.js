import React from 'react'

function Display(props) {
  console.log(props)
  return (
    <div>
       <div style={{width: '450px', boxShadow: '10px 10px 10px rgba(0,0,0,0.86)', margin: '30px auto', padding: '50px'}}>
          <h1>Batter Count</h1>
          <h2>Balls:{props.balls}</h2>
          <h2>Strikes:{props.strikes}</h2>
          <h4>Hits: {props.hits}</h4>
          <h4>Fouls: {props.fouls}</h4>
       </div>         
    </div>
  )
}

export default Display
