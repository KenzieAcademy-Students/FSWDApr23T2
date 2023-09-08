import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  const { department } = useParams();

  const showAllProducts = () => navigate("/products");

  const selectDepartment = (department) => navigate(`/products/${department}`);

  return (
    <div className="productsPage">
      <h2>Our Products</h2>
      <div className="departmentOptions">
        <span>Filter By Department:</span>
        <ButtonGroup>
          <Button
            variant={!department ? "primary" : "secondary"}
            onClick={showAllProducts}
          >
            All
          </Button>
          <Button
            variant={department === "tool" ? "primary" : "secondary"}
            onClick={() => selectDepartment("tool")}
          >
            Tool
          </Button>
          <Button
            variant={department === "garden" ? "primary" : "secondary"}
            onClick={() => selectDepartment("garden")}
          >
            Garden
          </Button>
          <Button
            variant={department === "hardware" ? "primary" : "secondary"}
            onClick={() => selectDepartment("hardware")}
          >
            Hardware
          </Button>
        </ButtonGroup>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductsPage;
