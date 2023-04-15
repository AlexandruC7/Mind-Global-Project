import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ProductModal = (props) => {
  const { show, onHide, product } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    // Add the product to the cart with the selected quantity
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: {product.price} USD</p>
        <label>Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
