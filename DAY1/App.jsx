import './App.css'; // Assuming the path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; // Check the correct path
import Login from './pages/Login'; // Check the correct path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
