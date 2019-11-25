import React from "react";
import Nav from 'react-bootstrap/Nav';
import './../styles/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
	    <Nav defaultActiveKey="/home" className="flex-column col-2 fixed-top sidebar">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
	    </Nav>
		);
	}
}

export default Sidebar