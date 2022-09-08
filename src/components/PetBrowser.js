import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petCards = pets.map(pet => {
    return (
      <Pet pet={pet} onAdoptPet={onAdoptPet} />
    )
  })
  return <div className="ui cards">{petCards}</div>;
}

export default PetBrowser;
