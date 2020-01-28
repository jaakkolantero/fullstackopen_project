import React from "react";

const Heading = () => {
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
            Best pizza in town.{" "}
            <mark className="text-gray-600 bg-transparent">
              Fresh from the oven.
            </mark>
          </h3>
        </div>
        <p className="mt-6 text-gray-700">
          Pizza italia has served its customers since 1956. Making pizzas from
          the finest ingredients in the same oven since the beginning.
        </p>
      </div>
    </section>
  );
};

export default Heading;
