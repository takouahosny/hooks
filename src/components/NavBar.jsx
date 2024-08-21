import { Button, Container, Form, Nav, NavDropdown, }
    from "react-bootstrap/";

function Navbar() {
     return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CINEHOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
                 <Navbar.Collapse id="navbarScroll">
                     
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
