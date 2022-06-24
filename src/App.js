import Nav from "./component/Nav";

import NavDropdown from "./component/NavDropdown";
import Navitem from "./component/Navitem";
import Home from "./component/Home";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Nav>
          <Navitem icon="">
            <NavDropdown />
          </Navitem>
        </Nav>
        <Home />
      </CartProvider>{" "}
    </>
  );
}

export default App;
