import { React, useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [books, setBook] = useState(data);

  return (
    <>
      <h2>Book List</h2>
      <section className="container">
        <h3>{books.length} books for display</h3>
        <List books={books} />
        <button onClick={() => setBook([])}>Remove all</button>
      </section>
    </>
  );
}

export default App;
