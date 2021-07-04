import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Jumbo extends Component {
    constructor(props) {
        super(props);
    

        this.state = {
        
        };
      }

     

    render() {
        return(
            <div >
              
                <Jumbotron className="mb-5">
                    <div className="container mb-5">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>CS CAR SALES</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a neque lacinia, volutpat nunc sed, vehicula ipsum. Phasellus gravida euismod ert. felis commodo scelerisque sit amet ut mi. Proin ultricies interdum felis, sed varius ex interdum in. Quisque vel erat in justo laoreet luctus. Duis neque justo, fermentum sed justo non, viverra egestas augue. Sed in mi bibendum, elementum tellus eu, consequat ipsum.

</p>
                            </div>
                            <div className="col-12 col-sm-6">
                            
                           <img className="img-fluid" src="\images\chr.png" alt="CHR1"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbo;