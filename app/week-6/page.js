"use client";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import itemsData from "./items.json";
import ItemList from "./itemList";
import NewItem from "./NewItem";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 assignments"
        description="A compendium of all the demos and labs we have completed week by week"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <h1 className="text-3xl font-bold tracking-tight text-heading md:text-4xl mb-5">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="mt-6 w-full flex justify-center">
        <ItemList items={items} />
      </div>
    </main>
  );
}

