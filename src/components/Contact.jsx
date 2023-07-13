import React from "react";

function Contact() {
  const Forms = [{ name: "Name" }, { name: "Email" }, { name: "Message" }];
  return (
    <section className="max-w-4xl mx-auto px-10 my-24">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-[#FF5C00] text-3xl font-semibold">Contact Me</h2>

          <div className="space-y-4 mt-6">
            {Forms.map((fill) => (
              <div className="flex items-start flex-col">
                <label htmlFor="name" className="text-lg font-medium">
                  {fill.name}
                </label>
                <input
                  type="text"
                  className="border-2 border-[#FF5C00] border-opacity-40 rounded-sm w-full h-12 px-4 outline-none text-lg font-medium bg-slate-100"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#FF5C00] h-16 text-center rounded-md text-white font-medium text-lg"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-10 md:ml-20">
          <h3 className="text-xl font-medium">Address and Phone</h3>
          <div>
            <h4>Vadlamudi Vamsi</h4>
            <a href="/">example@gmail.com</a>
          </div>

          <ul>
            <li>1st Line, Vijayawada</li>
            <li>Andhra Pradesh, India</li>
            <li>+91 12345 67890</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
