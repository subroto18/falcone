import { Fragment,useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from "../context/contextApi";
import { useNavigate } from "react-router-dom";
function Header() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const reset  = () => {
    context.refresh();
    navigate("/");
  }

  const home = () => {
    navigate("/home");
  }

  return (
     <Fragment>
             <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={reset}>Reset |</Nav.Link>
                        <Nav.Link onClick={home}>Geek Trust Home</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
             </header>
     </Fragment>
  );
}

export default Header;