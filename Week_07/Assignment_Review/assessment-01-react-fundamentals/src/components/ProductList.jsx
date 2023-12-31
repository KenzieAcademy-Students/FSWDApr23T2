import ProductSummary from "./ProductSummary";
import { useParams } from "react-router-dom";

const ProductList = ({ productList }) => {
  const params = useParams();

  const department = params.department ? params.department : "";

  return (
    <ul>
      {productList &&
        productList
          .filter((product) =>
            product.department.includes(department.toLowerCase())
          )
          .map((product) => (
            <ProductSummary key={product.id} product={product} />
          ))}
    </ul>
  );
};

export default ProductList;
