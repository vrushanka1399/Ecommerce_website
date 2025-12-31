import React, { useState, useCallback, useMemo } from "react";

function MoviesForm() {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const newMovie = {
        title: title.trim(),
        openingText: openingText.trim(),
        releaseDate
      };

      console.log("NewMovieObj:", newMovie);

      // clear inputs after submit
      setTitle("");
      setOpeningText("");
      setReleaseDate("");
    },
    [title, openingText, releaseDate]
  );

  // not necessary, but shows memoization usage
  const isFormValid = useMemo(() => {
    return title.trim() !== "" && openingText.trim() !== "" && releaseDate !== "";
  }, [title, openingText, releaseDate]);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Add Movie</h2>

      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Opening Text</label>
          <textarea
            rows="3"
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Release Date</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <button type="submit" disabled={!isFormValid}>
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default MoviesForm;
