import PageHeader from "../components/PageHeader";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 assignments"
        description="A compendium of all the demos and labs we have completed week by week"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <h1 className="text-3xl font-bold tracking-tight text-heading md:text-4xl mb-5 bg">
        Shopping List
      </h1>
      <ItemList/>
    </main>
  );
}