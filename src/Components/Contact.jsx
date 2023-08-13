import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setMessage("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_85to4es",
        "template_8nsbhdm",
        formData,
        "NZQFyq83U0oJ3qnQR"
      );

      if (response.status === 200) {
        setMessage("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setMessage("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      setMessage("Oops! Something went wrong.");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Contact Us</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="subject" className="mb-3">
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="message" className="mb-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="recaptcha" className="mb-3">
          <ReCAPTCHA
            sitekey="6LeeeKMnAAAAAOy2r-gBpMJNUVdL6Kw5IRL2Iz_W"
            onChange={handleRecaptchaChange}
          />
          {!recaptchaToken && (
            <div className="text-danger">Please complete the reCAPTCHA.</div>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Send Email
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
