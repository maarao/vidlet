'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js

const Generate = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [scriptOutput, setScriptOutput] = useState(null);
  const [scriptError, setScriptError] = useState(null);
  const [doneRunning, setDoneRunning] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleClick = async () => {
    setIsRunning(true);
    setScriptOutput(null);
    setScriptError(null);

    setTimeout(() => {
      setDoneRunning(true);
    }, 10000);

    // try {
    //   const response = await axios.post('/api/runPythonScript');
    //   setScriptOutput(response.data.output);
    // } catch (error) {
    //   setScriptError(error.response?.data?.error || 'Error running script');
    // } finally {
    //   setIsRunning(false);
    //   // setDoneRunning(true);
    // }
  };

  // Redirect when doneRunning is true
  if (doneRunning) {
    router.push('/flashcards'); // Replace '/redirect-page' with your desired page URL
    return null; // Return null to prevent rendering anything else
  }

  return (
    <div>
      <button disabled={isRunning} onClick={handleClick}>
        {isRunning ? 'Running Script...' : 'Run Python Script'}
      </button>
      {scriptOutput && <p>Script Output: {scriptOutput}</p>}
      {/* {scriptError && <p style={{ color: 'red' }}>Error: {scriptError}</p>} */}
    </div>
  );
};

export default Generate;
