import Quantity from "./Quantity";

const Product = (props) => {
  return (
    <span>
      Item Name - Item Price -
      <Quantity />
    </span>
  );
};

export default Product;
