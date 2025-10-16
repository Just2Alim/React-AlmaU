import React from "react";

const BookCard = React.memo(({ book, onDelete }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "6px"
            }}
        >
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong>{book.genre}</p>
            <p><strong>Rating:</strong>{book.rating}</p>
            <button onClick={() => onDelete(book.id)} style={{background: "red", color: "white"}}>
                Delete
            </button>
        </div>
    );
});
export default BookCard;