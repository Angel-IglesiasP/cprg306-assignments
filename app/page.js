import Link from "next/link"

export default function Page(){
  return(
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold underline">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link href="week-2" className="text-center font-semibold p-3 text-indigo-500 "> Week 2 Assignment </Link>
    </main>
  )
}