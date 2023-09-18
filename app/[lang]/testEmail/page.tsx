"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function TestEmail() {
  const form = useRef<any>(null);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const resetFormFields = () => {
      if (form.current) {
        form.current.reset(); // Reset the form fields
      }
    };

    if (form.current)
      emailjs
        .sendForm(
          "service_xjo1mec",
          "template_i0gatxp",
          form.current,
          "6mtvUEGXw5fUmXxWR"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccessModalVisible(true);
            resetFormFields();
          },
          (error) => {
            console.log(error.text);
            setIsErrorModalVisible(true);
          }
        );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Envoyer un e-mail</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Adresse e-mail"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Envoyer
          </button>
        </form>
        {isSuccessModalVisible && (
          <div className="bg-green-200 p-2 mt-4 rounded-md">
            Email sent successfully!
          </div>
        )}
        {isErrorModalVisible && (
          <div className="bg-red-200 p-2 mt-4 rounded-md">
            Error sending email. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
}
