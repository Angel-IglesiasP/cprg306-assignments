"use client";
import { useState } from "react";
import items from "./items.json";

export default function NewItem()
{
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const categories = [...new Set(items.map((item) => item.category))];

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(`Added ${quantity} ${name} in ${category}`)
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return(
    <form onSubmit={handleSubmit} className=" max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-gray-700 shadow-md dark:bg-zinc-600 dark:shadow-gray-500 dark:shadow-md justify-center">
      <label htmlFor="name">Item Name:</label>
      <input
      type="text"
      value={name}
      id="name"
      name="name"
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full p-2 rounded-md border-2 border-gray-600 text-black dark:text-[#ffff] dark:bg-gray-600 dark:border-amber-50 h-10 mt-2"/>
      
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col w-auto">

        <label htmlFor="quantity" className="mt-2">Quantity:</label>
        <input
        type="number"
        min="1"
        max="99"
        value={quantity}
        id="quantity"
        name="quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="p-2 rounded-md border-2 border-gray-600 text-black mt-2 dark:text-[#ffff] dark:bg-gray-600 dark:border-amber-50 h-10"
        />
        </div>
        
        <div className="flex flex-col w-full">
          <label htmlFor="category" className="mt-2">Category:</label>
          <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md border-2 border-gray-600 text-black mt-2 dark:text-[#ffff] dark:bg-gray-600 dark:border-amber-50 h-10">
          {categories.map((category) => (
            <option key={category} value={category} >
            {category}
            </option>))}
          </select>
        </div>

      </div>

      <button type="submit" className="bg-blue-500 text-white px-6 py-2 mt-5 rounded-md hover:bg-blue-300 hover:text-blue-950 dark:bg-blue-300 dark:hover:bg-blue-600 dark:hover:text-blue-100 shadow-gray-700 shadow-md">+</button>
    </form>
  );
}