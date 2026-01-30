
import Link from "next/link";

const HomeButton = "block mx-auto mt-8 w-fit px-3 py-2 font-semibold bg-blue-200 " +
  "dark:bg-blue-800 hover:bg-blue-500 hover:dark:bg-blue-900 " +
  "hover:text-white rounded-lg";

export default function PageHeader({
  title,
  description,
  homeLink = "Home",
  bgColor = "bg-blue-300 dark:bg-blue-700",
}) {
  return (
    <header className={`py-10 px-6 mb-10 ${bgColor} rounded-xl w-screen `}>
      <h1 className="text-center text-3xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-center">{description}</p>
      <Link href="/" className={HomeButton}>
        {homeLink}
      </Link>
    </header>
  );
}
