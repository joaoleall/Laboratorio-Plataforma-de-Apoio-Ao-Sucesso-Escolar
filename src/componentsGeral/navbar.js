import React from 'react';
import "../App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    Link
} from 'react-router-dom';



const NavBar = () => {
    return(
        <div className="App">
  <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
  <Link to="/">
  <ReactBootStrap.Navbar.Brand href="#home">Side</ReactBootStrap.Navbar.Brand>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/media">
    <ReactBootStrap.Nav.Link href="#media">Média do aluno</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/PercentilCurso_UC">
    <ReactBootStrap.Nav.Link href="#permedcadeira">Percentil no Curso e na UC</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediauc">
    <ReactBootStrap.Nav.Link href="#mediacadeira">Média na UC</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/PercentilUC_Media">
    <ReactBootStrap.Nav.Link href="percentilUC_Media">Percentil e Média na UC</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediafinal">
    <ReactBootStrap.Nav.Link href="#mediafinal">Média dos Alunos</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaUCS_1ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_1ano">Média nas UCs do 1º ano do curso</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaUCS_2ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_2ano">Média nas UCs do 2º ano do curso</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaUCS_3ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_3ano">Média nas UCs do 3º ano do curso</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaCursos">
    <ReactBootStrap.Nav.Link href="#mediacursos">Média dos Cursos</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaCursos_1ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_1ano">Média dos Cursos no 1º ano</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaCursos_2ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_2ano">Média dos Cursos no 2º ano</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/mediaCursos_3ano">
    <ReactBootStrap.Nav.Link href="#mediacursos_3ano">Média dos Cursos no 3º ano</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}
export default NavBar;