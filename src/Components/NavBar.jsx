import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarB from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import generationService from "../Services/generationService";

const NavBar = () => {
    const [generations, setGenerations] = useState([]);

    const fetchGenerations = async () => {
        try {
            const response = await generationService.getGenerations();
            setGenerations(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }
    const uppercase = (string) => {
        let strCopy = string.split('-')
        let startString = strCopy[0];
        let endString = strCopy[1].toUpperCase()
        return startString.substring(0,1).toUpperCase()+startString.substring(1) + " " + endString
    }

    useEffect(() => {
        fetchGenerations()
    }, []);

    return <>
        <NavbarB expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarB.Brand href="/">Pokemon</NavbarB.Brand>
                <NavbarB.Toggle aria-controls="basic-navbar-nav" />
                <NavbarB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/pokemons">Pokemon With Params</Nav.Link>
                        <NavDropdown title="Générations" id="basic-nav-dropdown">
                            {generations.map(gen => {
                                return <NavDropdown.Item key={gen.name} href={"/generation/" + gen.name}>{uppercase(gen.name)}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    </>
};

export default NavBar;