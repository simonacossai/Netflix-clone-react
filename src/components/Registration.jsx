import React, {useState} from "react"
import { Navbar, Form, Nav, Container, Button, FormControl, NavDropdown, Col, Row, Modal } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import './Registration.css'
import ModalComponent from './ModalComponent';
const initialState = {
  registration: {
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    postal: '',
    dateTime: '',
    city: '',
    card: '',
  },
  nameError: "",
  surnameError: "",
  emailError: "",
  passwordError: "",
  disabled: true,
  data: [],
  isModalOpen: false,
}


class Registration extends React.Component {
  
  state = {
    registration: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      address: '',
      postal: '',
      dateTime: '',
      city: '',
      card: '',
    },
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: "",
    disabled: true,
    data: [],
    submitted:false,
    isModalOpen: false,
  }

  updateRegistrationField = async (e) => {
    let registration = { ...this.state.registration }
    let currentId = e.currentTarget.id
    registration[currentId] = e.currentTarget.value

    let isValid = await this.validate();

    this.setState({ registration: registration })
    if (isValid) {
      this.setState({ disabled: false })
    }
  }



  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let surnameError = "";

    if (!this.state.registration.name || this.state.registration.name.length < 2) {
      nameError = "Name - Required, at least 2 chars";
    }else{
      nameError = ""
    }
    if (!this.state.registration.surname || this.state.registration.surname.length < 3) {
      surnameError = "Surname - Required, at least 3 chars";
    }else{
      surnameError = ""
    }
    if (this.state.registration.password.length < 8 ) {
      passwordError = "Password must contain at least 8 chars, 1 digit, 1 letter";
    }else{
      passwordError= ""
    }
    if (this.state.registration.email.endsWith(".")) {
      emailError = "invalid email, it shouldn't end with a dot"
    }else{
      emailError= ""
    }
    if (emailError || nameError ||passwordError|| surnameError) {
      this.setState({ emailError, nameError, surnameError, passwordError });
      return false;
    }
    return true;
  };



  submitRegistration = async (e) => {
    e.preventDefault();
    const data= this.state.registration;
    this.setState({data: data})
    this.setState({submitted: true})
   console.log(data)
    this.setState(initialState);
  }
  render(props) {
    return (
      <>
        <div className="background">
          <header className="showcase">
            <div className="showcase-content">
              <div class="form-wrapper text-left">
                <Form className="w-100 mb-5" onSubmit={this.submitRegistration}>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your name"
                          value={this.state.registration.name}
                          onChange={this.updateRegistrationField}
                          required
                        />
                        <p>
                          {this.state.nameError}
                        </p>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="surname">Surname</Form.Label>
                        <Form.Control
                          type="text"
                          name="surname"
                          id="surname"
                          placeholder="Your surname"
                          value={this.state.registration.surname}
                          onChange={this.updateRegistrationField}
                          required
                        />
                        <p >
                          {this.state.surnameError}
                        </p>
                      </Form.Group>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email"
                        id="email" value={this.state.registration.email}
                        onChange={this.updateRegistrationField} placeholder="Enter email" />
                      <p>
                        {this.state.emailError}
                      </p>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password"
                        id="password" value={this.state.registration.password}
                        onChange={this.updateRegistrationField} placeholder="Password" />
                      <p>
                        {this.state.passwordError}
                      </p>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="phone">Phone</Form.Label>
                        <Form.Control
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="Your phone"
                          required
                          value={this.state.registration.phone}
                          onChange={this.updateRegistrationField}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={5}>
                      <Form.Group>
                        <Form.Label htmlFor="dateTime">Date and Time</Form.Label>
                        <Form.Control
                          type="date"
                          name="dateTime"
                          id="dateTime"
                          placeholder="Date and Time"
                          value={this.state.registration.dateTime}
                          onChange={this.updateRegistrationField}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="address">Street Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Your address"
                          value={this.state.registration.address}
                          onChange={this.updateRegistrationField}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="city">City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Your city name"
                          value={this.state.registration.city}
                          onChange={this.updateRegistrationField}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="postal">Postal code</Form.Label>
                        <Form.Control
                          type="number"
                          name="postal"
                          id="postal"
                          placeholder="Your postal code"
                          value={this.state.registration.postal}
                          onChange={this.updateRegistrationField}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="card">Credit Card</Form.Label>
                        <Form.Control
                          type="number"
                          name="card"
                          id="card"
                          placeholder="Your credit card number"
                          value={this.state.registration.card}
                          onChange={this.updateRegistrationField}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" disabled={this.state.disabled} onClick={() => this.handleOpenModal}	>Submit</Button>
                </Form>
            {this.state.submitted &&  <ModalComponent />}
           
              </div>
            </div>
          </header>
        </div>
      </>
    )
  }
}

export default withRouter(Registration); // will give the component exported EXTRA PROPS: history, location, match


