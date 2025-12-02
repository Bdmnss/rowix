interface StatItem {
  title: string;
  data?: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  items: StatItem[];
  className?: string;
}

function StatsSection({ items, className = "" }: StatsSectionProps) {
  return (
    <div
      className={`border-borderColor flex items-center justify-between rounded-[20px] border-2 p-5 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex h-[150px] w-[280px] items-center justify-center rounded-[14px] bg-secondary ${item.title === "KNOW MORE" ? "gap-2 text-xl" : "flex-col gap-5 text-lg"}`}
        >
          {item.icon && (
            <div className="border-buttonBorderColor flex size-16 items-center justify-center rounded-full border bg-primary">
              {item.icon}
            </div>
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
