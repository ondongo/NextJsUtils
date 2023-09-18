import React from "react";

function filterFruitsStartingWithA(fruits: any) {
  return fruits.filter((fruit: any) => fruit.name.includes("e"));
}

function MyComponent() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
  ];

  // Filtrer les fruits dont le nom commence par "A"
  const filteredFruits = filterFruitsStartingWithA(fruits);

  return (
    <div className="min-h-screen  bg-gray-100"> 
      <h1>Fruits starting with</h1>
      <ul>
        {filteredFruits.map((fruit: any) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
