import React from 'react';
import './App.css';

function App() {
const sum = (a: number, b: number): number => a + b;
const hello: string = 'Hello (Mario) World!';

return (
  <h1>
    {hello} You're no. {sum(1, 0)}
  </h1>
);}

export default App;
