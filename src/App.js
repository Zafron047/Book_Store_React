import './App.css';
import Nav from './src/components/Nav';
import Home from './src/components/Home';
import { Routes, Route } from 'react-dom/client';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
