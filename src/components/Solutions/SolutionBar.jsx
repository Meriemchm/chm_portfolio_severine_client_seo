import React from "react";
import { menuItemSolution } from "../Data/Data";
import { ServiceSolution } from "../Data/Data";
const Service = React.lazy(() => import('../Service/Service'));
const SolutionBar = () => {
  return (
    <>
      <div className="mx-auto rounded-lg grid grid-cols-2 sm:grid-cols-4 lg:gap-20 bg-second justify-center items-center w-full ">
        {menuItemSolution.map((item, id) => {
          return (
            <ul key={id}>
              <li
                className={`flex flex-col md:py-5 px-3 py-3 items-center md:gap-5 gap-2 
                  `}
              >
                <div
                  className={`m-auto flex justify-center items-center
                    
                      `}
                >
                  <img className=" " src={item.icon} alt="icon" />
                  
                </div>
                <p className={`text-center capitalize text-white text-sm md:text-base`}>
                  {" "}
                  {item.title}
                </p>
              </li>
            </ul>
          );
        })}
      </div>

      <>
        <div className="xl:px-44">
          <Service Title="" data={ServiceSolution} />
        </div>
      </>
    </>
  );
};

export default SolutionBar;
