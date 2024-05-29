import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(2);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <input type="text" />
      <input type="password" />
      <div>Count : {count}</div>
      <button
        onClick={handleCount}
        style={{
          backgroundColor: 'red',
        }}
      >
        Tambah
      </button>
    </div>
  );
};

export default App;
