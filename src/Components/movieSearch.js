import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from "react";

function MovieSearch({titleFilter, handleTitleSearch, addMovie, setAddMovie, handleSubmit}) {

    const [Display, setDisplay] = useState(false)

    const styleMovieAddForm = {
        backgroundColor: "#ffc107",
        padding: 10,
        borderRadius: 5,
        position: "absolute",
        display: Display ? 'block' : 'none',
        right: 235,
        top: 60,
        zIndex: 2
    }

    const displayAddForm = () => {
        setDisplay(current => !current)
    }


  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text-danger'>GMC-movie application</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style= {{ maxHeight: '100px' }}
            navbarScroll
          >
              <NavDropdown.Divider />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search for the movie"
              className="me-2"
              aria-label="Search"
              value={titleFilter}
              onChange={handleTitleSearch}
            />
            <Button variant="danger"  type="button"  onClick={displayAddForm}>Add movie</Button>
          </Form>
                </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MovieSearch;