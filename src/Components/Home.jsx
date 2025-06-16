import {} from "react";
import { motion } from "framer-motion";
import '../assets/Style/home.css';


const categories = [
  {
    title: "Ancient Stories",
    url: "https://www.penguinrandomhouse.com/books/all-ancient-world-history/",
    image: "https://img.freepik.com/free-photo/old-books-row_23-2147849825.jpg",
  },
  {
    title: "Novels",
    url: "https://www.pocketnovel.com/kannada",
    image: "https://img.freepik.com/premium-photo/opened-book-wooden-table-library-blurred-background-generative-ai_899894-29595.jpg",
  },
  {
    title: "Love Stories",
    url: "https://www.inkitt.com/genres/romance",
    image: "https://img.freepik.com/free-photo/book-with-heart-shaped-pages_1150-1748.jpg",
  },
  {
    title: "Science Fiction",
    url: "https://www.esquire.com/entertainment/books/g39358054/best-sci-fi-books/",
    image: "https://img.freepik.com/premium-photo/retro-futuristic-science-fiction-concept_900706-15619.jpg",
  },
];


const Home = () => {
  
  
  return (

  <div className="library-home text-white">
    {/* Hero Section */}
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay" />
      <motion.div
        className="container position-relative z-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-4 fw-bold mb-4">Welcome to Book World library 📚</h1>
        <p className="lead">Discover stories that spark your imagination and wisdom.</p>
      </motion.div>
    </div>

    {/* Category Cards Section */}
    <div className="container py-5">
      <div className="row g-4 category-cards">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="col-md-6 col-lg-3"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <a href={cat.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="card h-100">
                <img
                  src={cat.image}
                  className="card-img-top object-fit-cover"
                  style={{ height: "200px" }}
                  alt={cat.title}
                />
                <div className="card-body bg-dark text-white text-center">
                  <h5 className="card-title">{cat.title}</h5>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </div>


  );
}

export default Home;
