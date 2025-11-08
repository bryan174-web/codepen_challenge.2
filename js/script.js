
/* Bryan Sevilla
date:11/2/2025
assignment: script for codepen challenge */

// Character list. Each house has a name and a code.  I don't understand why it needs a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return ["No house selected"]; 
  }
};

// wait for the html to load
document.addEventListener('DOMContentLoaded', init);

function init() {
  //create reference to the select list
  let house = document.getElementById('house');
  
 
  // loop through array and create an option tag for each item in the array.
  houses.forEach( (item) => {
    const option = document.createElement('OPTION');
    option.value = item.code;
    option.innerText = item.name;
    house.appendChild(option);
    // build the option and append it to the dropdown.

  });

   // display a list of the house members 
  // when the select list has changed.
  house.addEventListener('change', (e) => {
    //get the house code from the select
    const code = e.target.value;
    let members = getCharacters(code);
   
    // DOM ref for ul to display members
    const container = document.getElementById('characters');
    
    // clear out any previous member names
    container.innerHTML = '';
   
    // create the li's and append to the ul
    members.forEach((person)=> {
      let item = document.createElement('LI');
      item.innerText = person;
      container.appendChild(item);
    });
    
  }); //end addEventListener - change
 
} //end init
