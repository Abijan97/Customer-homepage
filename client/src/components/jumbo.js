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
                                <p>C.S car sales is a pioneer in the automotive industry and has been a trusted supplier of brand new and reconditioned vehicles since 1977. We are now a second generation business with 45 years of experience in the industry. Our brand new and pre-owned vehciles range from a variety of hatchbacks, sedans, SUV’s, van’s and trucks. These vehicles travel across the world from our trusted supplies in Asia and Europe to reach the hands of our clients.
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