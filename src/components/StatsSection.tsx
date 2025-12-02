import Icon from "../icons/Icon";

const statsData = [
  {
    title: "CLIENTS",
    data: "200+",
  },
  {
    title: "PROJECTS",
    data: "280+",
  },
  {
    title: "HAPPY CLIENTS",
    data: "100%",
  },
  {
    title: "FOLLOWER",
    data: "420K",
  },
  {
    title: "Years Of Experience",
    data: "10+",
  },
  {
    icon: <Icon type="SmallUpArrowIcon" />,
    title: "KNOW MORE",
  },
];

function StatsSection() {
  return (
    <div className="border-borderColor grid grid-cols-6 gap-5 rounded-[20px] border-2 p-5">
      {statsData.map((item, index) => (
        <div
          key={index}
          className={`flex h-[150px] w-full items-center justify-center rounded-[14px] bg-secondary ${item.title === "KNOW MORE" ? "gap-2 text-xl" : "flex-col gap-5 text-lg"}`}
        >
          {item.icon && (
            <button className="border-buttonBorderColor flex size-16 items-center justify-center rounded-full border bg-primary">
              {item.icon}
            </button>
          )}
          <p className="text-textGray font-mono text-lg font-medium">
            {item.title}
          </p>
          {item.data && (
            <p className="text-6xl font-medium text-orange">{item.data}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
