import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/Style/readbook.css';

const ReadBooks = () => {
  const { id: bookid } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    const fetchBookId = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/books/${bookid}`);
        setBookData(response.data);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      }
    };

    fetchBookId();
  }, [bookid]);

  const {
    title = "Not available",
    isbn = "N/A",
    pageCount = "N/A",
    thumbnailUrl = "https://via.placeholder.com/150x200?text=No+Image",
    longDescription = "No long description available.",
    shortDescription = "No short description available.",
    status = "Unknown",
    authors = [],
    categories = []
  } = bookData;

  return (
    <div className="readbook py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Book Thumbnail and Title */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 read-book-card">
              <div className="card-body text-center">
                <img
                  src={thumbnailUrl}
                  alt="Book Thumbnail"
                  className="img-fluid mb-4 rounded"
                />
                <h2 className="card-title text-light">{title}</h2>
                <p className="text-muted mb-3"><strong>ISBN:</strong> {isbn}</p>
                <p className="text-muted mb-3"><strong>Pages:</strong> {pageCount}</p>
                <div className="status-btn">
                  <button className="btn btn-outline-info btn-sm">{status}</button>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details Section */}
          <div className="col-md-6 mb-4">
            <div className="book-details bg-secondary p-4 rounded shadow">
              <h4 className="text-light mb-4">Book Details</h4>
              <p><b><i className="fas fa-user"></i> Author:</b> {authors.join(", ")}</p>
              <p><b><i className="fas fa-tags"></i> Category:</b> {categories.join(", ")}</p>

              {/* Short Description */}
              <div className="short">
                <p><b><i className="fas fa-info-circle"></i> Short Description:</b><br />{shortDescription}</p>
              </div>

              {/* Long Description */}
              <div className="long">
                <p><b><i className="fas fa-align-left"></i> Long Description:</b><br />{longDescription}</p>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="additional-info mt-4">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="flip-box">
                    <div className="flip-inner">
                      <div className="flip-front bg-info text-white d-flex align-items-center justify-content-center rounded">
                        <h5>Status</h5>
                      </div>
                      <div className="flip-back bg-dark text-white d-flex align-items-center justify-content-center rounded">
                        <p className="m-0">{status}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="flip-box">
                    <div className="flip-inner">
                      <div className="flip-front bg-primary text-white d-flex align-items-center justify-content-center rounded">
                        <h5>Author</h5>
                      </div>
                      <div className="flip-back bg-dark text-white d-flex align-items-center justify-content-center rounded">
                        <p className="m-0">{authors.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="flip-box">
                    <div className="flip-inner">
                      <div className="flip-front bg-warning text-white d-flex align-items-center justify-content-center rounded">
                        <h5>Category</h5>
                      </div>
                      <div className="flip-back bg-dark text-white d-flex align-items-center justify-content-center rounded">
                        <p className="m-0">{categories.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* end of additional-info */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
