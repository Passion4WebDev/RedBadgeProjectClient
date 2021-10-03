import React, { useState } from "react";
import {Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button,
  Col, Row, Container} from 'reactstrap'
import logo from '../../assets/Blogimageslogo.PNG'
import { Link, Switch, Route } from "react-router-dom";
import RatingCreate from "../Rating/RatingCreate";
import RatingDisplay from "../Rating/RatingDisplay";
import RatingIndex from "../Rating/RatingIndex";
import APISearch from "../Rating/APISearch";
import APIDisplay from "../Rating/APIDisplay"

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
		<Navbar color="" light expand="md" style={{"border":"35px solid navy"}}>
        <NavbarBrand className="nav-logo"><img src={logo} width="275" height="135"/></NavbarBrand>
        <h1 className="mainTitle">Exotic Super CarsXXXX!</h1>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar style={{marginRight: "50px"}}>
            <NavItem>
              <Link to="/home"><NavLink style={{color:"navy"}}>Home</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/blog"><NavLink style={{color:"navy"}}>Blog</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/new cars"><NavLink style={{color:"navy"}}>New Cars</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/used cars"><NavLink style={{color:"navy"}}>Used Cars</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/dealer"><NavLink style={{color:"navy"}}>Dealers</NavLink></Link>
            </NavItem>
                        <NavItem >
              <Link to="/ratings/"><NavLink style={{color:"navy"}}>Ratings</NavLink></Link>
            </NavItem>
            <NavItem >
              <Link to='/all-ratings/'><NavLink style={{color:"navy"}}>All Ratings</NavLink></Link>
            </NavItem>
            <NavItem>
              <Button onClick={props.clickLogout} color="warning" className="logoutButton">Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
      <Switch>

        <Route exact path="/" >
          <Container className='auth-container'>
            <Row>
              <Col md='6'>
                <APISearch />
              </Col>
              <Col md='6' className='login-col'>
                <RatingCreate token={props.token} />
                <APISearch />
              </Col>
            </Row>
          </Container>
        </Route>
              <Route exact path="/ratings/">
                {/* render={props => renderComponent(RatingCreate, { ...props, token: sessionToken })} */}
                
                <RatingDisplay token={props.token} />
              
              </Route> 

              <Route exact path="/blog/">
                {/* render={props => renderComponent(RatingCreate, { ...props, token: sessionToken })} */}
                
                <RatingDisplay token={props.token} />
              
              </Route>

              <Route exact path="/new cars/">
                               
                <RatingDisplay token={props.token} />

              <Route exact path="/used cars/">
                               
               <RatingDisplay token={props.token} />
              
              </Route>
              
              </Route>

              <Route exact path="/all-ratings/">

                <RatingIndex token={props.token} />

                {/* <RatingDisplayAll /> */}

              </Route>

            </Switch>

          </div>
          );
};

          export default Sitebar;
