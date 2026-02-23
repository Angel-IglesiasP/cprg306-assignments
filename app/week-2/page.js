import PageHeader from "../components/PageHeader";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between text-center">
      <PageHeader
        title="CPRG 306 assignments"
        description="Week 2: Working with links, tailwind styles and basic components!"
        bgColor="bg-header-bg"
        homeLink="Home"
      />
      <StudentInfo/>
    </main>
  );
}