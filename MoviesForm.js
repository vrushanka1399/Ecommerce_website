import React, { useState, useCallback } from "react";

function MoviesForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const submitHandler = useCallback(async (event) => {
    event.preventDefault();

    const movie = {
      title,
      openingText,
      releaseDate,
    };

    // POST to Firebase
    const response = await fetch(
      "https://YOUR-PROJECT-ID.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // notify parent App component
    onAddMovie({ id: data.name, ...movie });

    // clear form
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }, [title, openingText, releaseDate, onAddMovie]);

  return (
    <form onSubmit={submitHandler}>
      <h2>Add Movie</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Opening Text"
        value={openingText}
        onChange={(e) => setOpeningText(e.target.value)}
      />

      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MoviesForm;