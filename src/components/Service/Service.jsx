import React from "react";

const Service = ({ data, Title }) => {
  let NewData = null;
  if (Title) {
    NewData = data.filter((item) => item.service === Title);
  } else {
    NewData = data;
  }

  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center ">
        <h2 className="text-2xl text-bold text-second py-4">Mes Services</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 text-center py-8 px-0 justify-center items-center ">
          {NewData.map(({ id, title, description, src,style ,textStyle}) => (
            <div
              key={id}
              className={`rounded-lg flex flex-col justify-center items-center p-5 border-[1px] ${style} w-full h-full mx-auto`}
            >
              <div className={`pt-5  flex w-24 h-24`}>
                <div
                  className={`m-auto  w-24 h-24 flex justify-center items-center  `}
                >
                  <img className="" src={src} alt="service" />
                </div>
              </div>
              <p className={`py-5 mt-4 text-bold text-xl ${textStyle}`}>{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
