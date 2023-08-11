import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <section id="contact">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1>Coming Soon</h1>
          <p>We are working on updating this page. Please check back later!</p>
          <Button variant="primary" onClick={handleOpenModal}>
            Contact Us
          </Button>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                For any inquiries or questions, please contact us at
                <a href="mailto:contact@vallarasuk.com">
                  contact@vallarasuk.com
                </a>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
