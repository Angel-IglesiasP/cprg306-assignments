import Link from "next/link";
const navItems = [
    {
    title: "Week 1",
    href: "week-1",
  },
    {
    title: "Week 2",
    href: "week-2",
  },
  {
    title: "Week 3",
    href: "week-3",
  },
  {
    title: "Week 4",
    href: "week-4",
  },
  {
    title: "Week 5",
    href: "week-5",
  },
    {
    title: "Week 5 Challenge",
    href: "week-5-challenge",
  },
  {
    title: "Week 6",
    href: "week-6",
  },
  {
    title: "Week 7",
    href: "week-7",
  },
  {
    title: "Week 8",
    href: "week-8",
  },
  {
    title: "Week 9",
    href: "week-9",
  },

  {
    title: "Week 10",
    href: "week-10",
  },
];
export default function SiteNav() {
  return (
    <nav>
      <ul className="grid grid-cols-2 grid-rows-5 gap-x-50 gap-y-6 my-4 mx-6 text-2xl text-center">
        {navItems.map((item) => {
          return (
            <li
              key={item.href}
              className="my-2 bg-stone-300 dark:bg-stone-600 p-10 rounded-xl w-80"
            >
              <Link
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
