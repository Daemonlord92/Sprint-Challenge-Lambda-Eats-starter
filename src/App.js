import React from "react";
import { BrowserRouter as Router,
				Link,
				Route } from "react-router-dom"
import { Container,
					Jumbotron,
					Nav, 
					NavItem, 
					NavLink } from "reactstrap"

import Home from './Home/Home'
import Form from './Form/Form'

const App = () => {
  return (
    <>
    	<Router>
    		<Container>
	    		<Jumbotron>
		      	<h1>Lambda Eats</h1>
		      	<Nav>
			        <NavItem>
			          <NavLink href="javascript:void(0)">
			          	<Link to='/'>
			          		Home
			          	</Link>
			          </NavLink>
			        </NavItem>
			        <NavItem>
			          <NavLink href="javascript:void(0)">
			          	<Link to="/Pizza">
			          		Order Pizza
			          	</Link>
			          </NavLink>
			        </NavItem>
			      </Nav>
		      </Jumbotron>
		      <Route path='/Pizza'>
		      	<Form />
		      </Route>
		      <Route exact path='/'>
		      	<Home />
		      </Route>
	      </Container>
      </Router>
    </>
  );
};
export default App;
