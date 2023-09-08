import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductSummary = ({ product }) => {
  return (
    <Card className="productSummary">
      <Card.Body>
        <Card.Link as={Link} to={`/products/detail/${product.id}`}>
          {product.name} -{" "}
          {product.quantity > 0 ? `$${product.price}` : "Out of Stock"}
        </Card.Link>{" "}
        <span className="productArrow">&gt;</span>
      </Card.Body>
    </Card>
  );
};

export default ProductSummary;
