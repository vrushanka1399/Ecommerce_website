import React, { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      phone,
    };

    // 🔥 replace PROJECT-ID below with your Firebase link
    await fetch(
      "https://YOUR-PROJECT-ID.firebaseio.com/contactUs.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    alert("Message submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;