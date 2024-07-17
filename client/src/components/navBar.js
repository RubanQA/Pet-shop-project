import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Device Hub</NavLink>
                <Nav className="ml-auto" style={{ color: 'white' }}>
                    {user.isAuth ? (
                        <>
                            <Button variant="outline-light">Admin panel</Button>
                            <Button variant="outline-light" className="ml-2">Login</Button>
                        </>
                    ) : (
                        <Button variant="outline-light" on onClick={() => user.setIsAuth(true)}>Login</Button>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );

});

export default NavBar;
