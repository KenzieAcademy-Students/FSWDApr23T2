import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { productId } = useParams();
  // When this component loads, get the Product ID from the url parameter.

  // Then, in a useEffect, find the matching product from the productList prop, and assign it to product in state
  useEffect(() => {
    const paramProduct =
      productList && productList.find((product) => product.id == productId);

    if (paramProduct) {
      setProduct(paramProduct);
    } else {
      navigate("/products");
    }
  }, [productId]);

  return (
    <div>
      <h3>{product.name}</h3>
      <div>Price: ${product.price}</div>
      <p>{product.description}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default ProductDetail;
