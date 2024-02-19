import "./App.css";
import AddBook from "./components/AddBook";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
      
    </div>
  );
}

export default App;
