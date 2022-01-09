import FormField from './components/FormField';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(33,37,41)';
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar title="SuDo" mode={mode} toggleMode={toggleMode}/>   
      <div className="container">
        <Routes>
          <Route exact path="/" element={<FormField mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>   
    </div>
    </BrowserRouter>
  );
}

export default App;
