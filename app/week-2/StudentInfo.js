import Link from "next/link"

export default function StudentInfo() {
    return(
        <section className="font-semibold bg-blue-950 rounded-lg text-white p-4">
            <h1>Student Information</h1>
            <h2>Student name: Angel Iglesias</h2>
            <Link href="https://github.com/Angel-IglesiasP/cprg306-assignments" className="font-semibold text-blue-600 hover:text-blue-300 duration-300 ease-linear"> <strong>Here is my repo!</strong> </Link>
        </section>
    )
}