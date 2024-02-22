import "./App.css";
import AddBook from "./components/AddBook";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import EditBook from "./components/EditBook";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard books={books} setBooks={setBooks} />}
        />

        <Route
          element={<AddBook books={books} setBooks={setBooks} exact={true} />}
          path="/addBook"
        />
        <Route
          element={<EditBook books={books} setBooks={setBooks} exact={true} />}
          path="/editBook/:bookId"
        />
      </Routes>
    </div>
  );
}

export default App;
