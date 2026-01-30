import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 assignments"
        description="A compendium of all the demos and labs we have completed week by week"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <h1>Under construction!</h1>
    </main>
  );
}