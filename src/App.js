
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleValue = (event) =>{
    setInput(input + event.target.value);
  }

  const evaluateInputs = () =>{
    setInput(eval(input));
  }
  const clearInput = () =>{
    setInput('')
  }
  const deletInput = () =>{
    setInput(input.toString().slice(0, -1));
  }
  return (
    <div className="container">
      <h1>Calculatore</h1>
      <div className='calculatore'>
        <form>
          <div>
            <input type='text' value={input} placeholder='0' readOnly/>
          </div>
          <div>
            <input type='button' value='C' className='clear' onClick={clearInput}/>
            <input type='button' value='del' className='operatore' onClick={deletInput}/>
            <input type='button' value='(' className='operatore' onClick={handleValue}/>
            <input type='button' value=')' className='operatore' onClick={handleValue}/>
          </div>
          <div>
            <input type='button' value='7' onClick={handleValue}/>
            <input type='button' value='8' onClick={handleValue}/>
            <input type='button' value='9' onClick={handleValue}/>
            <input type='button' value='+' className='operatore' onClick={handleValue}/>
          </div>
          <div>
            <input type='button' value='4' onClick={handleValue}/>
            <input type='button' value='5' onClick={handleValue}/>
            <input type='button' value='6' onClick={handleValue}/>
            <input type='button' value='-' className='operatore' onClick={handleValue}/>
          </div>
          <div>
            <input type='button' value='1' onClick={handleValue}/>
            <input type='button' value='2' onClick={handleValue}/>
            <input type='button' value='3' onClick={handleValue}/>
            <input type='button' value='/' className='operatore' onClick={handleValue}/>
          </div>
          <div>
            <input type='button' value='0' onClick={handleValue}/>
            <input type='button' value='.' onClick={handleValue}/>
            <input type='button' value='*' className='operatore' onClick={handleValue}/>
            <input type='button' value='=' className='equal' onClick={evaluateInputs}/>
          </div>          
        </form>
      </div> 
    </div>
  );
}

export default App;
