import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onAdoptPet (petId) {
    const newAry = pets.map(pet => {
      if (pet.id === petId) return {...pet, isAdopted: true}
      else return pet;
    })
    setPets(newAry);
  }

  function onChangeType (event) {
    setFilters({...filters,
      type: event.target.value,
    });
  }

  function onFindPetsClick () {
    let query = "/pets";
    if (filters.type !== "all") {query += "?" + new URLSearchParams(filters)};
    
    fetch(`http://localhost:3001` + query)
    .then(r => r.json())
    .then(getR => setPets(getR))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
