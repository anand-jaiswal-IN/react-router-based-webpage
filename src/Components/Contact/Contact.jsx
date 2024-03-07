import React from "react";

function Contact() {
  const contactDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
  };

  const address = {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
  };
  return (
    <div className="px-40 py-10">
      <h1 className="text-3xl text-center bg-red-700 text-white py-1">Contact Us</h1>
      <br />
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl underline">Contact Details</h2>
          <br />
          <p>{contactDetails.email}</p>
          <p>{contactDetails.phone}</p>
          <br />
          <p>
            {address.street}, {address.city}, {address.state}, {address.zip},{" "}
            {address.country}
          </p>
        </div>
        <div>
          <h2 className="text-2xl underline">Online Inquiry</h2>
          <br />
          <form action="" method="post">
            <label htmlFor="name">Name : </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 px-2 rounded-md w-[100%]"
            />
            <br />
            <br />
            <label htmlFor="email">Email : </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 px-2 rounded-md w-[100%]"
            />
            <br />
            <br />
            <label htmlFor="phone">Phone : </label>
            <br />
            <input
              type="number"
              name="phone"
              id="phone"
              className="border-2 px-2 rounded-md w-[100%]"
            />

            <br />
            <br />
            <label htmlFor="message">Message : </label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="border-2 px-2 rounded-md resize-none"
            ></textarea>
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              className="cursor-pointer bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded-md"
            />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
