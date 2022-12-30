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
                <form className="form bd-example text-center" style={styleMovieAddForm} onSubmit={ handleSubmit}>
                                <div className="input-group mb-1">
                                    <label className="input-group-text" for="inputGroupFile01">Film Cover</label>
                                    <input 
                                        /*value={addMovie.img} 
                                        onChange={(e) => setAddMovie({...addMovie, img: e.target.value})}*/
                                        disabled 
                                        readonly
                                        placeholder="Default Image"
                                        type="file" 
                                        className="form-control" 
                                        id="inputGroupFile01"
                                    />
                                </div>
                                <div className="input-group flex-nowrap mb-1">
                                    <span className="input-group-text" id="addon-wrapping">Title</span>
                                    <input 
                                        value={addMovie.title} 
                                        onChange={(e) => setAddMovie({...addMovie, title: e.target.value})} 
                                        type="text" 
                                        className="form-control" 
                                        placeHolder="Film Title" 
                                        ariaLabel="Username" 
                                        ariaDescribedby="addon-wrapping"
                                    />
                                </div>
                                <div className="input-group flex-nowrap mb-1">
                                    <span className="input-group-text" id="addon-wrapping">Rate</span>
                                    <input 
                                        value={addMovie.rate} 
                                        onChange={(e) => setAddMovie({...addMovie, rate: e.target.value})} 
                                        type="number" 
                                        className="form-control" 
                                        min="0" 
                                        max="5" 
                                        step="0.1" 
                                        id="customRange3"
                                        placeHolder="Film Rate"
                                    ></input>
                                </div>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">Film Description</span>
                                    <textarea 
                                        value={addMovie.desc} 
                                        onChange={(e) => 
                                        setAddMovie({...addMovie, desc: e.target.value})} 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"
                                        placeHolder="Film Description"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark mt-2">Submit Movie</button>
                            </form>
      </Container>
    </Navbar>
  );
}

export default MovieSearch;