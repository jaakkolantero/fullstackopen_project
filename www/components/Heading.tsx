import React from "react";

const Heading = ({ content }) => {
  console.log("content", content);
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-center w-full mt-8">
      <div className="mx-1 sm:mx-8">
        <img
          className="h-48 w-full max-w-lg md:max-w-sm object-cover rounded-lg overflow-hidden shadow-xl"
          src="/images/dominic-dreier-twR54xVerrI-unsplash.jpg"
          alt="Restaurant pizza italia"
        />
      </div>
      <div className="max-w-lg mx-4">
        <div className="mt-8">
          <h3 className="text-4xl text-gray-800 font-bold tracking-tight leading-none">
            {content?.title}{" "}
            <mark className="text-gray-600 bg-transparent">
              {content?.highlight}
            </mark>
          </h3>
        </div>
        <p className="mt-6 text-gray-700">{content?.content}</p>
      </div>
    </section>
  );
};

export default Heading;
