import { useEffect, useState ,useRef} from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [input,setInput]=useState("");
  const counter =useRef(0);

  useEffect(()=>{
    counter.current=counter.current+1;
  })

  const formHandler=(e)=>{
    setInput(e.target.value);
  }
  return (
    <div>
  <Header/>
  <input value={input} onChange={formHandler}/>
  <h4>Application has been renderes {counter.current} times</h4>
    </div>
  );
}

export default App;
