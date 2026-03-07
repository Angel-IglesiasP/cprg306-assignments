import Link from "next/link";
import PageHeader from "./components/PageHeader";
import DemoNav from "./components/DemoNav";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <PageHeader
        title="CPRG 306 assignments"
        description="A compendium of all the demos and labs we have completed week by week"
        bgColor="bg-green-300 dark:bg-green-800"
        homeLink="Home"
      />
      <DemoNav />
      <Link
        href="/week-7"
        className="mt-4 mb-10 rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-500"
      >
        Go to Week 7
      </Link>
    </main>
  );
}
