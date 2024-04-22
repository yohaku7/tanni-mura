import { useState } from 'react';
import './App.css';
import Form from './Form.js';

function App() {
  const [selectedMinorSubject, setSelectedMinorSubject] = useState("");

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
