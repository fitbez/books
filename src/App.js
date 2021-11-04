import { React, useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [books, setBook] = useState(data);

  const handleClear = () => {
    setBook([]);
  };

  return (
    <>
      <h2>Book List</h2>
      <section className="container">
        <h3>{books.length} books on the shelf</h3>
        <List books={books} />
        {books.length !== 0 ? (
          <button onClick={handleClear}>Clear all</button>
        ) : (
          <button id="reset" onClick={() => setBook(data)}>
            {" "}
            Resset
          </button>
        )}
      </section>
    </>
  );
}

export default App;
