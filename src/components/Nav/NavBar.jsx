import React from 'react'
//styles
import styles from "./NavBar.module.css";
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
export default function NavBar() {
  return (
<Navbar expand="lg" className={styles.navbar_wrapper}>
      <Container>
        <NavLink to="/home" className={({ isActive }) =>isActive ? `${styles.navbar_brand} no-active` : styles.navbar_brand }>
  Start Framework
</NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`ms-auto ${styles.navbar_brand}`}>
            <NavLink to="/about"className={styles.navbar_brand}>About</NavLink>

            <NavLink to={'./portofolio'}  className={styles.navbar_brand}>portfolio</NavLink>
            <NavLink to={'/contact'}  className={styles.navbar_brand}>contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
