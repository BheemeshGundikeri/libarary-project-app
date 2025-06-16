import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import '../assets/Style/books.css';
import { useLocation, useNavigate } from "react-router-dom";
// import Cart from "./Users/Cart";

const Books = ({ cart, setCart }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 👈 Search state
  const navigate = useNavigate();
  const loc = useLocation();
  const bool = loc.pathname.startsWith("/adminportal");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const readMore = (id) => {
    bool ? navigate(`/adminportal/readbooks/${id}`) : navigate(`/UserPortal/readbooks/${id}`);
  };

  const deleteBook = (id, title) => {
    const confirmation = window.confirm(`Do you want to delete ${title} book?`);
    if (confirmation) {
      fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' })
        .then(() => {
          alert('Book is Deleted');
          setBooks(books.filter(book => book.id !== id));
        })
        .catch(err => {
          console.error("Error deleting the book:", err);
          alert("Failed to delete the book");
        });
    } else {
      alert("Book is not Deleted");
    }
  };

  const addToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);
    if (existingBook) {
      const updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      alert(`${book.title} is already in the cart.`);
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
      alert(`${book.title} has been added to the cart.`);
    }
  };

  // const removeFromCart = (id) => {
  //   const updatedCart = cart.filter((item) => item.id !== id);
  //   setCart(updatedCart);
  // };

  // 👇 Filter books based on searchTerm
  const filteredBooks = books.filter((book) => {
  const titleMatch = book.title?.toLowerCase().includes(searchTerm.toLowerCase());
  const authorMatch = book.authors?.some((author) =>
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const categoryMatch = Array.isArray(book.categories) && book.categories.some((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return titleMatch || authorMatch || categoryMatch;
});


  return (
    <>
      <div className="books-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="fw-bold display-5 text-light">📚 Our Library</h1>
            <p className="text-white-50">Explore a wide range of books, authors, and genres</p>

            {/* 🔍 Search Input */}
            <input
              type="text"
              placeholder="Search books by title, author or category..."
              className="form-control mt-3 w-50 mx-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row g-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => {
                const { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = book;
                return (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={id}>
                    <div className="card h-100 shadow-sm border-0 book-card">
                      <div className="card-img-container" style={{ height: "220px", overflow: "hidden", background: "#f9f9f9" }}>
                        <img
                          src={thumbnailUrl}
                          className="card-img-top"
                          alt="Book Thumbnail"
                          style={{ height: "100%", objectFit: "contain", padding: "10px" }}
                        />
                      </div>
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title text-truncate" title={title}>{title}</h5>
                        <p className="card-text mb-2"><strong>Author:</strong> {authors?.join(", ")}</p>
                        <p className="text-muted small mb-2">
                          <strong>Category:</strong> {Array.isArray(categories) ? categories.join(", ") : "N/A"}
                        </p>
                        <ul className="list-unstyled small">
                          <li><strong>Status:</strong> {status}</li>
                          <li><strong>ISBN:</strong> {isbn}</li>
                          <li><strong>Pages:</strong> {pageCount}</li>
                        </ul>
                        <div className="mt-auto d-flex justify-content-between gap-2">
                          <button className="btn btn-outline-light btn-sm w-100" onClick={() => readMore(id)}>
                            Read More
                          </button>
                          {bool ? (
                            <button className="btn btn-outline-danger btn-sm w-100" onClick={() => deleteBook(id, title)}>
                              Delete
                            </button>
                          ) : (
                            <button className="btn btn-outline-success btn-sm w-100" onClick={() => addToCart(book)}>
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-white">No books found.</div>
            )}
          </div>
        </div>
      </div>
{/* 
      {!bool && (
      <div className="text-center mt-4">
        <button className="btn btn-warning" onClick={() => navigate("/UserPortal/cart")}>
          Go to Cart
        </button>
      </div>
    )} */}

    </>
  );
};

Books.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Books;
