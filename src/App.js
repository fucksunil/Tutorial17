
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (colorName) => {

    if (mode === colorName) {
      setMode("dark")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }

    switch (colorName) {
      case 'success':
        setMode('success')
        document.body.style.backgroundColor = 'green'
        document.body.style.color = 'white'
        showAlert("Green mode has been enabled", "success")
        document.title = "TextUtils - Green Mode"
        break;
      case 'danger':
        setMode('danger')
        document.body.style.backgroundColor = 'red'
        document.body.style.color = 'white'
        showAlert("Red mode has been enabled", "success")
        document.title = "TextUtils - Red Mode"
        break;
      case 'warning':
        setMode('warning')
        document.body.style.backgroundColor = 'orange'
        document.body.style.color = 'white'
        showAlert("Orange mode has been enabled", "success")
        document.title = "TextUtils - Orange Mode"
        break;
      case 'primary':
        setMode('primary')
        document.body.style.backgroundColor = 'blue'
        document.body.style.color = 'white'
        showAlert("Blue mode has been enabled", "success")
        document.title = "TextUtils - Blue Mode"
        break;
      default:
        console.log('Empty action received.');
    }
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}
      <About />
      {/* <Route path="/about" element={<About />}> </Route> */}
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
      {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}></Route> */}
      {/* </Routes> */}
      {/* </Router> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
