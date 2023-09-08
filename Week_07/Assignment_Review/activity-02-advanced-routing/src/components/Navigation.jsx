import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <NavBar>
      <NavBar.Brand>React Router Practice</NavBar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/pokedex">Pokedex</Nav.Link>
        </Nav.Item>
      </Nav>
    </NavBar>
  );
};

export default Navigation;
