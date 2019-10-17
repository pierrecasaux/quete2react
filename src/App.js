import React from 'react';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact name="Arianna Gutierrez" avatar="https://randomuser.me/api/portraits/women/65.jpg" online />
      <Contact name="Arita Day" avatar="https://randomuser.me/api/portraits/women/92.jpg" />
      <Contact name="Samantha Washington" avatar="https://randomuser.me/api/portraits/women/88.jpg" online />
    </div>
  );
}

const rootElement = document.getElementById("root");
export default App;
