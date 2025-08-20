import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '8px' }}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '8px' }}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
