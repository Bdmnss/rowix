import Icon from "../../icons/Icon";

interface SocialMediaCard {
  icon: "InstagramIcon" | "TwitterIcon" | "DribbleIcon" | "BehanceIcon";
  title: string;
  description: string;
}

const socialMediaCards: SocialMediaCard[] = [
  {
    icon: "InstagramIcon",
    title: "INSTAGRAM",
    description:
      "Share visually appealing snippets of our latest web projects.",
  },
  {
    icon: "TwitterIcon",
    title: "TWITTER",
    description: "Tweet about interesting coding challenges you've overcome.",
  },
  {
    icon: "DribbleIcon",
    title: "DRIBBBLE",
    description: "Showcase design elements of our web projects.",
  },
  {
    icon: "BehanceIcon",
    title: "BEHANCE",
    description: "Create detailed presentations for our projects.",
  },
];

function SocialMediaCards() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {socialMediaCards.map((card) => (
        <div
          key={card.title}
          className="relative rounded-2xl bg-secondary p-10 transition-all hover:bg-opacity-80"
        >
          <div className="mb-20 flex justify-between">
            <div className="flex size-16 items-center justify-center rounded-xl border border-iconBorderColor bg-borderColor">
              <Icon type={card.icon} />
            </div>
            <button className="flex size-12 items-center justify-center rounded-full border border-iconBorderColor bg-borderColor">
              <Icon type="SmallUpArrowIcon" className="size-6" />
            </button>
          </div>
          <h3 className="mb-3 text-3xl font-medium text-orangeText">
            {card.title}
          </h3>
          <p className="text-lg text-gray">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaCards;
