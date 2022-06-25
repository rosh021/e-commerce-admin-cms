import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { postAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  dob: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const [initialRegisterData, setRegisterData] = useState({});

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({ ...initialRegisterData, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    if (initialRegisterData.password !== initialRegisterData.confirmPassword) {
      return toast("Password and Confirm password do not match");
    }

    const { confirmPassword, ...rest } = initialRegisterData;

    const { status, message } = await postAdminUser(rest);
    
    toast[status](message);
  };
  return (
    <Form onSubmit={handelOnSubmit}>
      <h3 className="text-center">Registration Form</h3>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="fName"
          placeholder="First Name"
          required
          onChange={handelOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lName"
          placeholder="Last Name"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="044444444"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          type="date"
          name="Dob"
          placeholder="D/M/Y"
          onChange={handelOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="address"
          name="address"
          placeholder="1 Sydney"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="smit@gmail.com"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          required
          onChange={handelOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p className="text-end">
        Already Have Account? <Link to="/">Login </Link>
      </p>
    </Form>
  );
};
