import React from "react";
import { BrowserRouter as Router,
				Link,
				Route } from "react-router-dom"
import { Container,
					Col,
					Row,
					Card,
					Jumbotron,
					Button,
					Nav, 
					NavItem, 
					NavLink } from "reactstrap"

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
			          	<Link>
			          		Home
			          	</Link>
			          </NavLink>
			        </NavItem>
			        <NavItem>
			          <NavLink href="javascript:void(0)">
			          	<Link>
			          		Order Pizza
			          	</Link>
			          </NavLink>
			        </NavItem>
			      </Nav>
		      </Jumbotron>
		      
	      </Container>
      </Router>
    </>
  );
};
export default App;
