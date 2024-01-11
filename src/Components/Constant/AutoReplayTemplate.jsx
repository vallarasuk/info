import React from "react";

const AutoReplyTemplate = ({ recipientName }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <img
        src="https://example.com/logo.png" // Replace with your logo URL
        alt="Logo"
        width="120"
        height="120"
        style={{ display: "block", margin: "0 auto", marginBottom: "20px" }}
      />
      <h2 style={{ color: "#4285F4", marginBottom: "20px" }}>
        Thank you for reaching out!
      </h2>
      <p style={{ fontSize: "16px", color: "#333" }}>
        Hi {recipientName},<br />
        <br />
        We've received your message and will get back to you as soon as
        possible. We appreciate your interest and look forward to assisting you
        with your inquiry.<br />
        <br />
        If you have any urgent matters, please feel free to contact us at{" "}
        <a
          href="mailto:contact@yourdomain.com" // Replace with your email address
          style={{ color: "#4285F4", textDecoration: "none" }}
        >
          contact@yourdomain.com
        </a>.<br />
        <br />
        Best regards,<br />
        The [Your Company Name] Team
      </p>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontSize: "14px", color: "#888" }}>
          [Your Company Name] | Address, City, Country |{" "}
          <a
            href="https://yourdomain.com" // Replace with your website URL
            style={{ color: "#4285F4", textDecoration: "none" }}
          >
            www.yourdomain.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AutoReplyTemplate;
