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

  const sendAutoReply = async (recipientEmail, recipientName) => {
    const autoReplyTemplateParams = {
      recipientName: recipientName,
      recipientEmail: recipientEmail,
    };

    try {
      await emailjs.send(
        "service_85to4es",
        "template_8nsbhdm",
        autoReplyTemplateParams,
        "NZQFyq83U0oJ3qnQR"
      );
    } catch (error) {
      console.error("Error sending auto-reply: ", error);
    }
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
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "NZQFyq83U0oJ3qnQR"
      );

      if (response.status === 200) {
        setMessage("Email sent successfully!");

        // Send auto-reply
        await sendAutoReply(formData.email, formData.name);

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
    <Container className="my-4">
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
            sitekey="6LeeeKMnAAAAAOy2r-gBpMJNUVdL6Kw5IRL2Iz_W
            " // Replace with your ReCAPTCHA sitekey
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

      {/* Auto-Reply Template */}
      {message === "Email sent successfully!" && (
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f7f7f7",
          }}
        >
          <h2 style={{ color: "#4285F4", marginBottom: "20px" }}>
            Thank you for reaching out!
          </h2>
          <p style={{ fontSize: "16px", color: "#333" }}>
            Hi <strong>{formData.name}</strong>,
            <br />
            <br />
            We've received your message and will get back to you as soon as
            possible. We appreciate your interest and look forward to assisting
            you with your inquiry.
            <br />
            <br />
            If you have any urgent matters, please feel free to contact us at
            <a
              href="mailto:contact@vallarasuk.com" // Replace with your email address
              style={{ color: "#4285F4", textDecoration: "none" }}
            >
              contact@vallarasuk.com
            </a>
            .
          </p>
          <div style={{ marginTop: "30px" }}>
            <p style={{ fontSize: "14px", color: "#888" }}>
              Vallarasuk | Address, Bangalore, India |
              <a
                href="https://vallarasuk.com" // Replace with your website URL
                style={{ color: "#4285F4", textDecoration: "none" }}
              >
                www.vallarasuk.com
              </a>
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ContactForm;
