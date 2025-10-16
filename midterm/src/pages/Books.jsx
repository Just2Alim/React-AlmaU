import React, { useState, useEffect, useCallback } from "react";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback((id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const filtered = books.filter((b) => {
    const byTitle = b.title.toLowerCase().includes(search.toLowerCase());
    const byGenre = genre === "all" || b.genre === genre;
    return byTitle && byGenre;
  });

  return (
    <div className="container">
      <h2>Book List</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Nonfiction</option>
        <option value="tech">Tech</option>
      </select>

      {filtered.length > 0 ? (
        filtered.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete} />
        ))
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}
