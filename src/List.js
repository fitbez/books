import React from "react";

function List({ books }) {
  return (
    <div>
      {books.map((book) => {
        const { id, author, title, image } = book;
        return (
          <article key={id} className="book">
            <img src={image} alt={title} />
            <div className="title">
              <h4>Author: {author}</h4>
              <p>Book Title: {title}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
