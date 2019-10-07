import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <Chat image='https://randomuser.me/api/portraits/women/75.jpg' 
      name='Beverly Jimenez'
      text= {false}
      />
      <Chat image='https://randomuser.me/api/portraits/men/74.jpg' 
      name='Marvin Fuller'
      text= {true}
      />
      <Chat image='https://randomuser.me/api/portraits/women/50.jpg' 
      name='Bella Jones'
      text= {false}
      />
    </div>
  );
}

export default App;
