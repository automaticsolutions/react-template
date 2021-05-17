import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="App">{count}</div>;
}

export default App;
