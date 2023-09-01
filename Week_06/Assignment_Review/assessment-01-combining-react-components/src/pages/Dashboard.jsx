import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../items";

function Dashboard({ userName, cart, setCart }) {
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    const newCartItem = products.find((product) => product.id === id);

    if (cart.some((product) => product.id === id)) return;

    setCart([...cart, newCartItem]);
  };

  const handleRemoveFromCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <div id="container">
      <header>Choose what you need, {userName}!</header>
      <div id="main">
        <article>
          <div className="products">
            {products.map((product) => (
              <ProductCard
                key={`product-${product.id}`}
                name={product.name}
                image={product.image}
                onClick={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        </article>
        <nav></nav>
        <aside>
          <div className="cart">
            <p>Cart</p>
            <div className="cart-products">
              {cart.map((product) => (
                <ProductCard
                  key={`cart-${product.id}`}
                  name={product.name}
                  image={product.image}
                  onClick={() => handleRemoveFromCart(product.id)}
                  isCart
                />
              ))}
              <button
                onClick={() => navigate("/confirmation")}
                className="product-select"
              >
                Check Out
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
