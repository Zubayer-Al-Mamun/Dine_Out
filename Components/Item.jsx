// import { useState } from "react";

// export default function Item({ itemData }) {
//   const [iconChange, setIconChange] = useState(false);
//   return (
//     <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
//       <div className="flex items-center">
//         <div className="w-12 h-12   flex items-center justify-center mr-3">
//           <img src={itemData.image} alt="Hamburger" className="w-10 h-10" />
//         </div>
//         <div>
//           <h3 className="font-medium">{itemData.name}</h3>
//           <p className="text-xs text-gray-400">BDT {itemData.price}</p>
//         </div>
//       </div>

//     </div>
//   );
// }

{
  /* <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">

if (iconChange) {
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20"
  fill="currentColor">
  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clip-rule="evenodd" />
</svg>
}else{
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
}

</button> */
}

import { useState } from "react";

let itemData = [
  { name: "Hamburger", price: 250, image: "./assets/hamburger.svg" },
  { name: "Chicken Nuggets", price: 300, image: "./assets/chicken.svg" },
  { name: "Ice Cream", price: 90, image: "./assets/iceCream.svg" },
  { name: "Submarine Sandwich", price: 120, image: "./assets/submarine.svg" },
  { name: "Pizza", price: 400, image: "./assets/pizza.svg" },
  { name: "Juice", price: 60, image: "./assets/juice.svg" },
  { name: "Tea", price: 30, image: "./assets/tea.svg" },
];

export default function CreateOrder() {
  // Track each button's state individually
  const [iconState, setIconState] = useState({});

  function handleOnSmash(itemName) {
    setIconState((prev) => ({
      ...prev,
      [itemName]: !prev[itemName], // toggle this specific item's state
    }));
  }

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* Customer Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {/* Choose Items */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <ul>
          {itemData.map((item) => (
            <li key={item.name}>
              <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">BDT {item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleOnSmash(item.name)}
                  className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  {iconState[item.name] ? "Hi" : "Hello"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>
  );
}
