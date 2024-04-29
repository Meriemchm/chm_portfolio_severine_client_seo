import React from "react";

const Presentation = () => {
  return (
    <div data-aos="fade-up"  name="accueil" className="flex h-screen w-full  " >
      <div   className=" mx-auto justify-center items-center h-full px-5 md:px-0 md:my-0 xl:w-1/2">
        <div className="flex flex-col justify-center h-full  md:pt-0">
          <div className="flex items-center">
            <h2  className="text-1xl md:text-3xl pr-2">BONJOUR, JE SUIS</h2>
            <div className="h-0.5 flex-grow bg-primary "></div>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold py-5 ">
            Allagui Séverine
          </h2>
          <p className="text-primary text-right">
            Spécialisée dans la communication et le développement web
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
