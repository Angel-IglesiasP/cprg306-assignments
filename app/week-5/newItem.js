"use client";

import { useState } from "react";

export default function NewItem() {
  // I need to initialize the useStates first using a constat to set the initial value and the setvalue.
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState("produce");

  // 
  const handleSubmit = (event) => {
    event.preventDefault(); 

    //this builds an object from the values
    const item = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    //prints the item in the console as a check 
    console.log(item);

    alert(
      `Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );

    // Resets the form back to the initial state
    setItemName("");
    setItemQuantity(1);
    setItemCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-120 bg-gray-200 p-6 rounded-md shadow-md space-y-4"
    >
      {/* Name Field */}
      <div>
        <label className="block font-semibold mb-2">Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          className="w-full p-2 rounded-md border"
          placeholder="e.g., Bread"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-3">
        {/* Quantity Field */}
        <div className="flex-1">
          <label className="block font-semibold mb-2">Quantity</label>
          <input
            type="number"
            min={1}
            max={99}
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            required
            className="w-full p-2 rounded-md border"
          />
        </div>

        {/* Category Field */}
        <div className="flex-1">
          <label className="block font-semibold mb-2">Category</label>
          <select
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
            required
            className="w-full p-2.5 rounded-md border"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold p-2 rounded-md hover:bg-blue-700 transition mt-3"
      >
        +
      </button>
    </form>
  );
}
