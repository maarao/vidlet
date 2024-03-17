import { spawn } from 'child_process';

export default async function handler(req, res) {
  const pythonProcess = spawn('python3', ['./app/scripts/convert.py']);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python Script Output: ${data.toString()}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python Script Error: ${data.toString()}`);
    res.status(500).json({ error: 'Error running Python script' });
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python Script exited with code: ${code}`);
    res.status(200).json({ message: 'Python script executed successfully' });
  });
}
