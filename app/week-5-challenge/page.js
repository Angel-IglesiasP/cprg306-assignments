import PageHeader from "../components/PageHeader";
import StateEventsLab from "./challenge";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 Challenge!"
        description="a challenge to practice logic a problem solving skills!"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <StateEventsLab/>
    </main>
  );
}