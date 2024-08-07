import React, { useState } from 'react';
import { chats } from './chats';

function App() {
  const [messages, setMessages] = useState(chats);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { id: messages.length + 1, text: input.trim() };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cytopharma App</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map(message => (
          <div key={message.id} style={{ padding: '5px 0' }}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '80%', padding: '10px', marginTop: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px' }}>Send</button>
    </div>
  );
}

export default App;