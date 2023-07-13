import React from "react";

function Quote() {
  return (
    <section
      style={{
        backgroundImage: "url('./images/quote-bg.jpg')",
        backgroundSize: "cover",
      }}
      className="h-[80vh] bg-fixed relative flex items-center justify-center px-10"
    >
      <div className="text-white text-center relative uppercase space-y-4">
        <h2 className="text-3xl md:text-5xl font-semibold">You can learn the coding</h2>
        <h4 className="text-3xl font-medium relative before:absolute before:border-4 before:w-5/12 before:right-0 before:top-1/2 before:-translate-y-1/2 after:absolute after:border-4 after:w-5/12 after:left-0 after:top-1/2 after:-translate-y-1/2">
          But
        </h4>
        <h1 className="text-7xl font-bold">Don't Give Up!</h1>
      </div>
    </section>
  );
}

export default Quote;
