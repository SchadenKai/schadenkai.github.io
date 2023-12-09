import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "../data";
import { ToastContainer, toast } from "react-toastify";

export default function ContactsPage({ ref }) {
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
          toast.success("📤 Successfully sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          toast.error('Something went wrong', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center h-100 w-100"
    >
      <div className="d-flex flex-column glass1 w-100">
        <h1 className="text-warning mx-4 mt-4">Contact me</h1>
        <p className="mx-4">{emailJSConfig.contactsPreviewText}</p>
        <form
          style={{ borderRadius: "30px" }}
          className="d-flex flex-column w-100 p-4 pt-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="form-label">Name</label>
          <input className="form-control mb-2" type="text" name="user_name" required/>
          <label className="form-label">Email</label>
          <input className="form-control mb-2" type="email" name="user_email" required/>
          <label className="form-label">Message</label>
          <textarea className="form-control mb-2" name="message" required/>
          <input className="btn btn-primary rounded mt-4" type="submit" />
        </form>
      </div>
    </div>
  );
}
