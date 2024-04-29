import React from "react";
import Service from "../Service/Service";
import { services } from "../Data/Data";
const SavoirFaire = () => {
  return (
    <div data-aos="fade-up" name="savoir-faire" className=" w-full ">
      <div className="md:px-20 mx-auto p-4 flex flex-col  w-full h-full ">
        <div className="flex items-center">
          <p className=" text-2xl md:text-4xl text-second font-bold p-2">
            Savoir-Faire
          </p>

          <div className="flex-grow h-0.5 bg-second"></div>
        </div>

        <div className="xl:w-2/3">
          <h2 className=" py-10  text-3xl">
            <span className="text-primary">Créativité</span> et{" "}
            <span className="text-primary">communication</span> vont souvent de
            pair
          </h2>
          <p>
            Je réalise en général un produit beau, utile, et vivant. En effet,
            je souhaite que vos clients vous identifient facilement, qu’ils vous
            mémorisent, et vous apprécient. C’est pour cette raison, que la
            création graphique est au centre de mes préoccupations.
            <br />
            <br />
            Mon objectif va également au-delà, en mettant de l’ingéniosité dans
            mes créations, afin d’augmenter la visibilité de la marque, et
            d’améliorer sa performance digitale.
            <br />
            <br />
            Je souhaite fournir une approche globale de la communication à mes
            clients, en proposant des services de conception graphique, de
            communication digitale, de conseil en stratégie de communication,
            ainsi que de conseil en développement d’audience...{" "}
          </p>
        </div>
        <div className=" xl:px-44">
          <Service data={services} Title="" />
        </div>
      </div>
    </div>
  );
};

export default SavoirFaire;
