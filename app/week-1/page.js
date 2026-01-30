import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 assignments"
        description="Week 1: say hello!"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <h1>Hello world!</h1>
    </main>
  );
}