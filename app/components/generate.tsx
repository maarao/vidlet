'use client'

import { useState } from 'react';
import axios from 'axios'; // Assuming you've installed Axios

const Generate = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [scriptOutput, setScriptOutput] = useState(null);
  const [scriptError, setScriptError] = useState(null);

  const handleClick = async () => {
    setIsRunning(true);
    setScriptOutput(null);
    setScriptError(null);
    try {
      const response = await axios.post('/api/runPythonScript');
      setScriptOutput(response.data.output); // Assuming script returns output
    } catch (error) {
      setScriptError(error.response?.data?.error || 'Error running script');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div>
      <button disabled={isRunning} onClick={handleClick}>
        {isRunning ? 'Running Script...' : 'Run Python Script'}
      </button>
      {scriptOutput && <p>Script Output: {scriptOutput}</p>}
      {scriptError && <p style={{ color: 'red' }}>Error: {scriptError}</p>}
    </div>
  );
};

export default Generate;
