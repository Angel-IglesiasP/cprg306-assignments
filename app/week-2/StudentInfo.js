import Link from "next/link"

export default function StudentInfo() {
    return(
        <section className="bg-indigo-50 border-2 border-black p-4">
            <h1>Student Information</h1>
            <h2>Student name: Angel Iglesias</h2>
            <Link href="https://github.com/Angel-IglesiasP/cprg306-assignments" className="text-center font-semibold"> <strong>Here is my repo!</strong> </Link>
        </section>
    )
}