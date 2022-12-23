import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/autobazar">Autobazar</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about">About us</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">Contact</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;