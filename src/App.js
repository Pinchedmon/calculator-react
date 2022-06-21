import React, { useState } from 'react';
import './css/App.css';

function App() {

  const [total, setTotal] = useState('0');
  const [entire, setEntire] = useState('0');
  const [dotted, setDotted] = useState(false);
  const [equaled, setEqualed] = useState(false);
  const handleRemove = () => {
    setTotal('0')
    setEntire('0')
    setDotted(false)


  }
  const handleAdd = (value) => {
    if(equaled === true){
      setTotal('0')
      setEntire('0')
    }
    let x = total;
    if (total !== 'digit limit') {
      if (total.length >= 20) {
        setInterval(setTotal('digit limit'), 1000)
        setTimeout(() => { clearInterval(setInterval(setTotal('digit limit'), 1000)); setTotal(x) }, 2000)
      } else {
        console.log(dotted)
        if (value !== '.') {
          x = total + value
          if (x[0] === '0') {
            x = x.substring(1)
          }
          setTotal(x)
        }
        if (value === '.') {
          if (dotted === false) {
            x = total + value
            if (x[0] === '0') {
              x = x.substring(1)
            }
            setTotal(x)
            setDotted(true)
          }
        }
      }
    }
   setEqualed(false)
  }
  const handlePlus = () => {
    if(equaled === true){
      setTotal('0')
      setEntire('0')
    }
    let y = entire;
    if (y.length > 1){
    if (y[0] === '0') {
      y = y.substring(1)
    }
    }
    setEntire(y + total + '+')
    setTotal('0')
    setEqualed(false)
  }
  const handleMinus = () => {
    if(equaled === true){
      setTotal('0')
      setEntire('0')
    }
    let y = entire;
    if (y.length > 1){
    if (y[0] === '0') {
      y = y.substring(1)
    }
    }
    setEntire(y + total + '-')
    setTotal('0') 
    setEqualed(false)
  }
  const handleMulti = () => {
    if(equaled === true){
      setTotal('0')
      setEntire('0')
    }
    let y = entire;
    if (y.length > 1){
    if (y[0] === '0') {
      y = y.substring(1)
    }
    }
    setEntire(y + total + '*')
    setTotal('0')
    setEqualed(false)
  }
  const handleDivide = () => {
    if(equaled === true){
      setTotal('0')
      setEntire('0')
    }
    let y = entire;
    if (y.length > 1){
    if (y[0] === '0') {
      y = y.substring(1)
    }
    }
    setEntire(y + total + '/')
    setTotal('0')
    setEqualed(false)
  }
  const handleEqual = () => {
    let y = entire;
    if (y.length > 1){
    if (y[0] === '0') {
      y = y.substring(1)
    }
    }
    // let otvet = eval(y)
    let otvet = eval(y+total)
    setEntire(y + total + "=" + otvet)
    setTotal(otvet)
    setEqualed(true);
    
  }
  return (
    <div className="App">
      <div className='screen'>
        <p className='entire'>{entire}</p>
        <p className='total'>{total}</p>
      </div>

      <div className='buttons'>
        <button className='AC' onClick={handleRemove}>AC</button>
        <button className='line' onClick={handleDivide}>/</button>
        <button className='delete'onClick={handleMulti}>x</button>
        <button className='seven' onClick={(e) => handleAdd(e.target.innerText)}>7</button>
        <button className='eight' onClick={(e) => handleAdd(e.target.innerText)}>8</button>
        <button className='nine' onClick={(e) => handleAdd(e.target.innerText)} >9</button>
        <button className='minus' onClick={handleMinus}>-</button>
        <button className='four' onClick={(e) => handleAdd(e.target.innerText)}>4</button>
        <button className='five' onClick={(e) => handleAdd(e.target.innerText)}>5</button>
        <button className='six' onClick={(e) => handleAdd(e.target.innerText)}>6</button>
        <button className='plus' onClick={handlePlus}>+</button>
        <button className='one' onClick={(e) => handleAdd(e.target.innerText)}>1</button>
        <button className='two' onClick={(e) => handleAdd(e.target.innerText)}>2</button>
        <button className='three' onClick={(e) => handleAdd(e.target.innerText)}>3</button>
        <button className='zero' onClick={(e) => handleAdd(e.target.innerText)}>0</button>
        <button className='dot' onClick={(e) => handleAdd(e.target.innerText)}>.</button>
        <button className='equal' onClick={handleEqual}>=</button>
      </div>
    </div>

  )
}

export default App;

