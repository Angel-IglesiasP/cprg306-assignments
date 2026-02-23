import Link from "next/link"
import PageHeader from "./components/PageHeader"
import DemoNav from "./components/DemoNav"


export default function Page(){
  return(
    <main className="flex flex-col items-center justify-between dark:bg-fuchsia-600">
      <PageHeader
        title="CPRG 306 assignments"
        description="A compendium of all the demos and labs we have completed week by week"
        bgColor="bg-header-bg"
        homeLink="Home"
      />
      <DemoNav />
    </main>
  )
}