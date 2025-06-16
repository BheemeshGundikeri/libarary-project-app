import PropTypes from 'prop-types';
import '../../assets/Style/cart.css';

const Cart = ({ cart = [], removeFromCart }) => {
  return (
    <div className="cart-container py-5" style={{ background: 'linear-gradient(to right, #fdfbfb, #ebedee)' }}>
      <div className="container bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4 text-primary fw-bold">🛒 Your Book Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-muted">No books added to the cart yet.</p>
        ) : (
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center p-3 shadow-sm mb-3 rounded border"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="me-3"
                    style={{ width: '60px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">{item.authors?.join(', ')}</small>
                  </div>
                </div>
                <div className="text-end">
                  <div className="fw-bold text-primary">x{item.quantity}</div>
                  <button
                    className="btn btn-sm btn-outline-danger mt-2"
                    onClick={() => removeFromCart(item.id)} // Use removeFromCart function
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="text-end fw-bold fs-5">
          Total Books: <span className="text-success">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired, // Fixed authors prop to be array
      quantity: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
