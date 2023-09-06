import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "../data";

export default function ContactsPage({ref}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        form.current,
        emailJSConfig.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div id="contact" className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      <div className="w-50 d-flex flex-column glass1">
        <h1 className="text-warning mx-4 mt-4">Contact me</h1>
        <p className="mx-4">{emailJSConfig.contactsPreviewText}</p>
        <form
          style={{borderRadius : "30px"}}
          className="d-flex flex-column w-100 p-4 pt-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="form-label">Name</label>
          <input className="form-control mb-2" type="text" name="user_name" />
          <label className="form-label">Email</label>
          <input className="form-control mb-2" type="email" name="user_email" />
          <label className="form-label">Message</label>
          <textarea className="form-control mb-2" name="message" />
          <input className="btn btn-primary rounded mt-4" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}