
import { Link } from '@material-ui/core';
import React, { Component } from 'react';
import SimpleMap from './googlemap';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
            

            

class Contact extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
    return(
        
        <div className="container p-5 shadow-lg rounded" style={{backgroundColor:"#ffcc80"}}>

            <div className="row ">
                

    
                <div className="card text-white bg-info mb-3" >
                <div className="card-header"><h3>Business Hours</h3></div>
                <div className="card-body">
                Mon:	9:00am - 6:00pm <br></br>
                Tue:	9:00am - 6:00pm <br></br>
                Wed:	9:00am - 6:00pm <br></br>
                Thu:	9:00am - 6:00pm <br></br>
                Fri:	9:00am - 6:00pm <br></br>
                Sat:	9:00am - 6:00pm <br></br>
                Sun:	Closed 
                </div>
            
                </div>
            </div>
            <br></br>
        
            <div className="row row-content">
                <div className="col-sm-6  card text-white bg-secondary mb-3">
               <div className="card-header"> <h3>Location Information</h3></div>
            
                <div className="card-body">
                        <h5>Our Address</h5>
                        <address>
                        C.S Car Sales<br />
                        174 Kandy Rd, Kadawatha<br />
                        11850<br />
                        <i className="fa fa-phone"></i>: 033 2256411<br />
                        <i className="fa fa-fax"></i>: +0332256411<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:cscarsales.lk">cscarsales.lk</a>
                        </address>
                
           
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            </div>
            <div className=" col-sm-6 ">
                    <h5>Map of our Location</h5>
                    <SimpleMap/>
                </div>
    
                </div>

            <br></br>
            <br></br>

            

                <div className="row row-content p-4 bg-info text-white">
                   <div className="col-12 ">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                    <Link to="http://localhost/chatapp/users.php" className="btn btn-primary">
                                        Live Chat
                                    </Link>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>


        </div>
    );
}
}

export default Contact;