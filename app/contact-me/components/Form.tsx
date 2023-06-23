"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
const formDefaultValues = {
  name: "",
  company: "",
  email: "",
  message: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [isMessageSent, setMessageSent] = useState(false);

  const handleChangeInput: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }

      setMessageSent(true);
      setFormValues(formDefaultValues);
    } catch (error: any) {
      console.log("The was the problem with Fetch operation" + error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-10">
        <div className="mb-4">
          <label className="label-form" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChangeInput}
            value={formValues.name}
            id="name"
            type="text"
            name="name"
            className="input-form"
            required
            minLength={3}
            maxLength={200}
          />
        </div>
        <div className="mb-4">
          <label className="label-form" htmlFor="company">
            Company
          </label>
          <input
            onChange={handleChangeInput}
            value={formValues.company}
            id="company"
            type="text"
            name="company"
            className="input-form"
            required
            minLength={3}
            maxLength={200}
          />
        </div>
        <div className="mb-4">
          <label className="label-form" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChangeInput}
            value={formValues.email}
            id="email"
            type="email"
            name="email"
            className="input-form"
            required
            minLength={3}
            maxLength={200}
          />
        </div>
        <div className="mb-4">
          <label className="label-form" htmlFor="message">
            Message
          </label>
          <textarea
            onChange={handleChangeInput}
            value={formValues.message}
            id="nmessage"
            name="message"
            className="input-form"
            required
            minLength={10}
            maxLength={1000}
          />
        </div>
        <button
          type="submit"
          className="bg-blue text-white rounded-md  hover:text-blue hover:bg-white border border-slate-300 hover:border-indigo-300 hover:border-1 min-w-100 h-12 px-5"
        >
          Send message
        </button>
      </form>
      {isMessageSent && <p>The message has been sent</p>}
    </>
  );
};

export default Form;
