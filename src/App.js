import React, { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [data, setdata] = useState(null)
  const [random, setrandom] = useState(0)
  const [score, setscore] = useState(0)
  const [count, setcount] = useState(1)
  const [left, setleft] = useState(5)
  const [name, setname] = useState(null)
  const [playername, setplayername] = useState(null)
  function showPlayername() {
    setplayername(name)
    setname("")
  }
  function add(id) {
    if (playername != null) {
      setdata(id)
    }
    else {
      setdata(null)
      alert("pls set player name first")
    }
  }
  function randem() {
    if (count < 5) {
      if (playername != null) {
        setrandom(Math.floor(Math.random() * 7))
        setcount(count + 1)
        setleft(left - 1)
        if (data === random) {
          setscore(score + 1)
        }
      }
    }
    else {
      finalScoreShow()
      reset()
      setcount(0)
      alertfunc()
    }
  }
  function alertfunc()   // alert if you not enter name
  {
    alert("set name first")
  }
  function finalScoreShow() // for score show in alert box
  {
    alert(`Score is : -  ${score}  `)
  }
  function reset()  //set intial state of all
  {
    setname(null)
    setplayername(null)
    setdata(null)
    setrandom(0)
    setscore(0)
    setleft(5)
  }
  return (
    <div className='gamebody'>
      <h3 className='gamename'>check your luck Now! </h3>
      <input type="text" value={name} onChange={(e) => setname(e.currentTarget.value)} placeholder=" Enter Player name..." ></input>
      <div>
        <button onClick={() => showPlayername()}>add name</button>
      </div>
      <div>
        <button className='btn1' onClick={() => add(0)}>0</button>
        <button className='btn1' onClick={() => add(1)}>1</button>
        <button className='btn1' onClick={() => add(2)}>2</button>
        <button className='btn1' onClick={() => add(3)}>3</button>
        <button className='btn1' onClick={() => add(4)}>4</button>
        <button className='btn1' onClick={() => add(5)}>5</button>
        <button className='btn1' onClick={() => add(6)}>6</button>
      </div>
      {
        <div>
          <h2>Player Name : {playername}</h2>
          <h1>Your :- {data}</h1>
          <button className='dice' onClick={() => randem()}>{random} </button>
          <h1>Score:  {score}&nbsp;&nbsp;&nbsp;&nbsp;Chance:- {left}</h1>
          <button className='resetbtn' onClick={() => reset()}>Reset Game</button>
        </div>
      }
    </div>
  )
}
export default App;
