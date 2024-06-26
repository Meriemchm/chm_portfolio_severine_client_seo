import React from "react";
import { Helmet } from 'react-helmet-async';
import MeetingContainer from './MeetingContainer';

const Meeting = () => {
  return (
    <div>            
    <Helmet>
    <title>Prenez rendez-vous</title>
    </Helmet>
    <div
    
      className="md:px-20 mx-auto p-4 flex flex-col  h-full w-full"
    >
      <div className="flex items-center mb-10">
        <p className="text-xl md:text-2xl text-second font-bold p-2 inline ">
          PRENEZ RENDEZ-VOUS
        </p>
        <div className="h-0.5 flex-grow bg-second "></div>
      </div>

      <MeetingContainer />
    </div>
    </div>
  );
};

export default Meeting;
