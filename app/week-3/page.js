import GroceryItemList from "./GroceryItemList";
import PageHeader from "../components/PageHeader";

export default function Page(){
    return(
    <main className="flex flex-col items-center justify-between">
      <PageHeader
        title="CPRG 306 assignments"
        description="Week 3: Learning how to work with components and styles making a shopping list!"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
        <h1 className="text-3xl font-bold tracking-tight text-heading md:text-4xl mb-5 bg">Shopping List</h1>
      <GroceryItemList/>
    </main>
    )
}