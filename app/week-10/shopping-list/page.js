"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import ItemList from "../item-list";
import NewItem from "../new-item";
import MealIdeas from "../MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const router = useRouter();
  const { user,authLoading } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
  if (!authLoading && !user) {
    router.push("/week-10");
  }
}, [authLoading, user, router]);


  const handleAddItem = async (newItem) => {
  if (authLoading || !user) return;

  const id = await addItem(user.uid, newItem);
  const itemWithId = { ...newItem, id };

  setItems((prevItems) => [...prevItems, itemWithId]);
};


  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "");

    setSelectedItemName(cleanedName);
  };

  const loadItems = async() => {
    if (!user) return;
    const items = await getItems(user.uid);
    setItems(items);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (authLoading) {
    return <p className="p-6">Loading. . .</p>
  }
  if (!user) {
    return null;
  }

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
        <div className="flex gap-8 items-start w-full justify-center">
          <div className="flex flex-col items-center">
            <NewItem onAddItem={handleAddItem} />
            <div className="mt-6 w-full max-w-6xl flex gap-25 items-start">
                <div className="flex-1 flex justify-center">
                  <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="flex-1">
                  <MealIdeas ingredient={selectedItemName} />
                </div>
              </div>
        </div>
      </div>
    </main>
  );
}


