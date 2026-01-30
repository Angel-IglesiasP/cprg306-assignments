import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="grid grid-cols-[auto_220px_120px] items-center py-2 border-b border-gray-200">
      <span className="font-medium">
        {name}
      </span>

      <span className="text-center text-gray-600 dark:text-amber-50">
        Qty: {quantity}
      </span>

      <span className="text-right">
        <span className="text-xs bg-gray-100 dark:bg-gray-600 dark:text-amber-50 px-2 py-1 rounded">
          {category}
        </span>
      </span>
    </li>
  );
}