import Icon from "../icons/Icon";

const works = [
  {
    title: "Zenith Fitness App".toUpperCase(),
    icon: <Icon type="MagicStickIcon" />,
    category: "Mobile App Development",
    time: "6 months",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    image: "/2.png",
    technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
    members: [
      "/profile1.png",
      "/profile2.png",
      "/profile3.png",
      "/profile4.png",
      "/profile5.png",
    ],
  },
  {
    title: "A-Aura Ecommerce".toUpperCase(),
    icon: <Icon type="BallonIcon" />,
    category: "Web Design & Development",
    time: "3 months",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    image: "/3.png",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    members: [
      "/profile6.png",
      "/profile7.png",
      "/profile8.png",
      "/profile9.png",
      "/profile5.png",
    ],
  },
];

function WorksSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between rounded-2xl bg-secondary p-12">
        <h2 className="text-5xl font-semibold text-orangeText">
          {"Our Works".toUpperCase()}
        </h2>
        <button className="flex items-center gap-2">
          <div className="flex size-16 items-center justify-center rounded-full border border-buttonBorderColor">
            <Icon type="SmallUpArrowIcon" />
          </div>
          <p className="font-mono text-xl font-medium text-gray">ALL WORKS</p>
        </button>
      </div>

      {works.map((work) => (
        <div
          key={work.title}
          className="grid grid-cols-3 gap-5 rounded-[20px] border-2 border-borderColor p-5"
        >
          <div className="flex flex-col gap-10 rounded-[14px] bg-secondary px-10 py-[60px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-xl border border-iconBorderColor bg-borderColor">
                  {work.icon}
                </div>
                <h2 className="text-2xl font-medium text-orangeText">
                  {work.title.toUpperCase()}
                </h2>
              </div>

              <button className="flex items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-full border border-iconBorderColor bg-borderColor">
                  <Icon type="SmallUpArrowIcon" className="size-6" />
                </div>
                <p className="text-lg font-medium text-gray">DETAILS</p>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex w-fit items-center gap-2 rounded-full bg-borderColor px-4 py-2">
                <p className="text-lg text-gray">Category</p>
                <div className="size-1 rounded-full bg-orange"></div>
                <p className="text-lg font-medium text-orangeText">
                  {work.category}
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-borderColor px-4 py-2">
                <p className="text-lg text-gray">Time Taken</p>
                <div className="size-1 rounded-full bg-orange"></div>
                <p className="text-lg font-medium text-orangeText">
                  {work.time}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray">{work.description}</p>
          </div>

          <img
            src={work.image}
            alt={work.title}
            className="h-full w-full rounded-[14px] object-cover"
          />

          <div className="flex flex-col gap-5">
            <div className="rounded-[14px] bg-secondary p-10">
              <h2 className="mb-5 text-lg font-medium text-orangeText">
                TECHNOLOGIES USED
              </h2>

              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-wrap gap-[10px]">
                  {work.technologies.slice(0, 4).map((technology, index) => (
                    <div
                      key={index}
                      className="text-lightGray rounded-full bg-borderColor px-4 py-2 font-mono"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
                {work.technologies.length > 4 && (
                  <div className="flex flex-wrap gap-[10px]">
                    {work.technologies.slice(4).map((technology, index) => (
                      <div
                        key={index + 4}
                        className="text-lightGray rounded-full bg-borderColor px-4 py-2 font-mono"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-10 rounded-[14px] bg-secondary p-10">
              <h2 className="text-lg font-medium text-orangeText">
                TEAM MEMBERS
              </h2>

              <div className="flex items-center gap-[10px]">
                {work.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex size-[50px] items-center justify-center rounded-full"
                  >
                    <img
                      src={member}
                      alt={member}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button className="rounded-xl bg-orange py-[18px]">
              BOOK A CALL
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorksSection;
