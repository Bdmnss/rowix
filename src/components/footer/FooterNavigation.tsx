interface NavColumn {
  title: string;
  links: string[];
}

const navigationColumns: NavColumn[] = [
  {
    title: "Home",
    links: ["Why Us", "About Us", "Testimonials", "FAQ's"],
  },
  {
    title: "Services",
    links: [
      "Web Development",
      "App Development",
      "Web Design",
      "Digital Marketing",
    ],
  },
  {
    title: "Projects",
    links: ["Klothink", "Zenith", "Novus", "Apex"],
  },
  {
    title: "Blogs",
    links: ["Business", "Design", "Development"],
  },
];

function FooterNavigation() {
  return (
    <div className="grid grid-cols-4 gap-5 rounded-2xl bg-secondary p-[60px]">
      {navigationColumns.map((column) => (
        <div key={column.title} className="flex flex-col gap-[30px]">
          <h3 className="text-[22px] font-bold text-orangeText">
            {column.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {column.links.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-lg text-gray transition-colors hover:text-orangeLight"
                >
                  {link}
                  {(link === "Design" || link === "Development") && (
                    <span className="ml-2 rounded-md border border-iconBorderColor bg-buttonBorderColor px-3 py-1 text-base text-[#cccccc]">
                      Soon
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterNavigation;
