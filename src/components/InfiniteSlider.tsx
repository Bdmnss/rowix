import { ReactNode } from "react";

interface InfiniteSliderProps {
  items: string[];
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
  animationDuration?: string;
}

function InfiniteSlider({
  items,
  separator = <span className="text-orange">•</span>,
  className = "",
  itemClassName = "",
  animationDuration = "30s",
}: InfiniteSliderProps) {
  // Duplicate items multiple times for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-scroll flex whitespace-nowrap"
        style={{
          animationDuration: animationDuration,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={`mx-4 flex items-center gap-4 ${itemClassName}`}
          >
            <span>{item}</span>
            {separator}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;

