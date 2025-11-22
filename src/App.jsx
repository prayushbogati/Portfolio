import { useState } from 'react'
import './css/App.css'

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();      // prevent page refresh
    setText(input);          // set the text state
  };

  return (
    <>
      <h1>Hello</h1>
      <div className="texts">{text}</div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App;
