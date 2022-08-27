import './App.css';
import './normalize.css';
import { Route, Routes } from 'react-router-dom';
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Products />} />
    </Routes>
  );
}

export default App;
