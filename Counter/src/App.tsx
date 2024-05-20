import React, { useState } from 'react';
import './App.css';
import { Counter } from './componets/Counter';

// App component think of routes 
function App() {
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrementTotal = () => {
    setTotalCount(totalCount + 1);
  };

  const handleDecrementTotal = () => {
    setTotalCount(totalCount - 1);
  };

  const handleResetTotal = (initialCount: number) => {
    setTotalCount(totalCount - initialCount);
  };

  return (
    <div className="App">
      <h1> Navbar {totalCount}</h1>
      <Counter
        initialCount={0}
        onIncrement={handleIncrementTotal}
        onDecrement={handleDecrementTotal}
        onReset={handleResetTotal}
      />
      <Counter
        initialCount={0}
        onIncrement={handleIncrementTotal}
        onDecrement={handleDecrementTotal}
        onReset={handleResetTotal}
      />
      <Counter
        initialCount={0}
        onIncrement={handleIncrementTotal}
        onDecrement={handleDecrementTotal}
        onReset={handleResetTotal}
      />
    </div>
  );
}

export default App;
