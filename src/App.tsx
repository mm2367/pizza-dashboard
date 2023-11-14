import './App.css';
import React from 'react';
import { Dashboard } from './Dashboard';
import { UserTable } from './components/UserTable';
import { PizzasEatenTable } from './components/PizzasEatenTable';

function App() {
  return (
    <div className="App">
      <UserTable/>
      <PizzasEatenTable/>
    </div>
  );
}

export default App;
