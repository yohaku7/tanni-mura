import './App.css';
import Home from './Home.js';
import Form from './Form.js';
import Header from './Header.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/score-form' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
