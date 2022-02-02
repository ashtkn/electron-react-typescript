import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const App: React.FC = () => {
  useEffect(() => {
    return window.myApi.onReceiveMessage((message) => {
      console.log(message);
    });
  }, []);
  const handleClick = useCallback(() => {
    window.myApi.sendMessage('Hello from renderer process');
  }, []);
  return (
    <div>
      <h1>Hello.</h1>
      <p>Welcome to Electron App.</p>
      <button onClick={handleClick}>Send message to main process</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
