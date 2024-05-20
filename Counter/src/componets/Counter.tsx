import React, { useState } from 'react';

// Counter component
export function Counter({ initialCount, onIncrement, onDecrement, onReset }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onDecrement();
  };

  const handleReset = () => {
    setCount(initialCount);
    onReset(initialCount);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <span>        {count}</span>
    </div>
  );
}
//export default Counter;
