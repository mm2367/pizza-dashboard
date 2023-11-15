import './App.scss';
import React from 'react';
import { Dashboard } from './Dashboard';
import { UserTable } from './components/UserTable';
import { PizzasEatenTable } from './components/PizzasEatenTable';
import { AddPerson } from './components/AddPerson';
import { AddPizza } from './components/AddPizza';

function App() {
  return (
    <div className="App">
      <AddPerson/>
      <UserTable/>
      <AddPizza/>
      <PizzasEatenTable/>
    </div>
  );
}

export default App;
