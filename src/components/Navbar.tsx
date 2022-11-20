import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from "../context/ShoppingCartContext";
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <NavbarBs className="bg-white mb-3 shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-primary"
                        className="rounded-circle">
                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </div>
                        <img src="https://www.svgrepo.com/show/316543/cart-1.svg" alt="" />
                    </Button>)}
            </Container>
        </NavbarBs>
    )
}
