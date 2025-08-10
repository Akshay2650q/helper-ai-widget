import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h2>Helper AI</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: '100%' }}
      />
      <br />
      <button onClick={sendMessage} style={{ marginTop: 10 }}>Send</button>
      {reply && (
        <div style={{ marginTop: 20, padding: 10, background: '#f0f0f0' }}>
          <strong>AI Reply:</strong> {reply}
        </div>
      )}
    </div>
  );
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
