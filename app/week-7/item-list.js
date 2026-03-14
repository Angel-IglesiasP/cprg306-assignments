"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "quantity") {
      return b[sortBy] - a[sortBy];
    }
    return a[sortBy].localeCompare(b[sortBy])
});

  const baseButtonClasses =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors bg-red";

  return (
    <section className="w-full max-w-2xl">
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`${baseButtonClasses} ${
            sortBy === "name"
              ? "bg-gray-700 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`${baseButtonClasses} ${
            sortBy === "category"
              ? "bg-gray-700 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Sort by Category
        </button>
        <button
          type="button"
          onClick={() => setSortBy("quantity")}
          className={`${baseButtonClasses} ${
            sortBy === "quantity"
              ? "bg-gray-700 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Sort by Quantity
        </button>
      </div>

      <ul className="w-full bg-gray-100 border-2 border-gray-300 shadow-blue-950 dark:bg-neutral-800 rounded-lg drop-shadow-2xl mb-10 overflow-hidden">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
