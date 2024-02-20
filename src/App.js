import "./App.css";
import AddBook from "./components/AddBook";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          element={<AddBook books={books} setBooks={setBooks} />}
          path="/addBook"
        />
      </Routes>
    </div>
  );
}

export default App;
