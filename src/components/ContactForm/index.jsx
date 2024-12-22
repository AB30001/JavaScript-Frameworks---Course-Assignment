import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { StyledForm } from "./styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      subject: "",
      email: "",
      body: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength="3"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength="3"
            placeholder="Enter subject"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            minLength="3"
            rows="10"
            placeholder="Please describe your inquiry here..."
          />
        </div>
        <Button type="submit" $proceed>
          Submit
        </Button>
      </StyledForm>
    </Container>
  );
};

export default ContactForm;
