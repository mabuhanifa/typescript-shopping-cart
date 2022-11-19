import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
export function Navbar() {
    return (
        <NavbarBs className="bg-white mb-3 shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                <Button style={{ height: "3rem", width: "3rem", position: "relative" }} variant="outline-secondary">
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
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
                        3
                    </div>
                    <img src="https://www.svgrepo.com/show/316543/cart-1.svg" alt="" />
                </Button>
            </Container>
        </NavbarBs>
    )
}
