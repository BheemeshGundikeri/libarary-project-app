import { useRef } from 'react';
import '../../assets/Style/addbooks.css';

const AddBooks = () => {
  const formData = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formData.current;

    try {
      // Step 1: Fetch existing books
      const res = await fetch("http://localhost:4000/books");
      const data = await res.json();

      // Step 2: Determine next serial ID
      const ids = data.map(book => Number(book.id)).filter(id => !isNaN(id));
      const maxId = ids.length > 0 ? Math.max(...ids) : 0;
      const newId = (maxId + 1).toString();

     
      // Step 3: Create new book object
      const newBook = {
        id: newId,
        title: form[0].value,
        isbn: form[1].value,
        pageCount: form[2].value,
        thumbnailUrl: form[3].value,  // use this name to match Books.jsx
        shortDescription: form[4].value,
        longDescription: form[5].value,
        status: form[6].value,
        authors: form[7].value.split(',').map(a => a.trim()),
        categories: form[8].value.split(',').map(c => c.trim()),
      };

      // Step 4: Send POST request to add book
      const postRes = await fetch("http://localhost:4000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
      });

      if (postRes.ok) {
        alert("Book added successfully!");
        form.reset(); // Clear the form
      } else {
        alert("Failed to add book.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error while adding book.");
    }
  };

  return (
    <div className="page-background">
      <div className="container mt-5 p-4 shadow rounded bg-light">
        <h2 className="text-center mb-4 text-primary">📚 Add New Book</h2>
        <form ref={formData} onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" placeholder="Enter Title" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Register No</label>
              <input type="number" className="form-control" placeholder="Enter Reg no" required />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Page Count</label>
              <input type="number" className="form-control" placeholder="Enter PageCount" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input type="text" className="form-control" placeholder="Enter Image URL" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <input type="text" className="form-control" placeholder="Enter Short Desc" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Long Description</label>
            <input type="text" className="form-control" placeholder="Enter Long Desc" />
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Status</label>
              <input type="text" className="form-control" placeholder="Enter Status" required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" placeholder="Enter Author(s), comma separated" required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Categories</label>
              <input type="text" className="form-control" placeholder="Enter Category(ies), comma separated" required />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              ➕ Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
